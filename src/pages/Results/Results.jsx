import { ResultsStyled, ResultsCards, Text, NoResults } from './Results.styled'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Card, SkItem } from '../../components/UI'
import { Link } from 'react-router-dom'

const Results = () => {
  const { query } = useParams()
  const { data, loading, error } = useFetch(`/search/multi?query=${query}`)

  if (error) {
    return (
      <NoResults>
        <p>{`No results for: ${query}`}</p>
        <Link to='/'>Back to home</Link>
      </NoResults>
    )
  }

  return (
    <ResultsStyled>
      <Text>
        Results for: <strong>{query}</strong>
      </Text>
      <ResultsCards>
        {loading ? (
          <SkItem />
        ) : (
          data?.results.map((item) => <Card key={item.id} item={item} />)
        )}
      </ResultsCards>
    </ResultsStyled>
  )
}
export default Results
