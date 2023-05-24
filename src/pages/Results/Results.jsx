import { NoResults, ResultsCards, ResultsStyled, Text } from './Results.styled'

import { Link, useParams } from 'react-router-dom'
import { Loader } from '../../components/UI'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { useCallback, useRef, useState } from 'react'
import ResultsCard from './ResultsCard'

import { v4 as uid } from 'uuidd'

const Results = () => {
  const [page, setPage] = useState(1)

  const { query } = useParams()
  const { loading, error, dataResults, hasNextPage } = useInfiniteScroll(
    query,
    page
  )

  const observer = useRef()
  const lastCardElementRef = useCallback(
    (el) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          setPage((prev) => prev + 1)
        }
      })

      if (el) observer.current.observe(el)
    },
    [loading, hasNextPage]
  )

  if (error) {
    return (
      <NoResults>
        <p>{`No results for: ${query}`}</p>
        <Link to='/'>Back to home</Link>
      </NoResults>
    )
  }

  const renderCard = (item, i) => {
    if (dataResults?.length === i + 1) {
      return <ResultsCard item={item} ref={lastCardElementRef} key={uid()} />
    } else {
      return <ResultsCard item={item} key={uid()} />
    }
  }

  return (
    <ResultsStyled>
      <Text>
        Results for: <strong>{query}</strong>
      </Text>
      <ResultsCards>{dataResults?.map(renderCard)}</ResultsCards>
      {loading && <Loader />}
    </ResultsStyled>
  )
}
export default Results
