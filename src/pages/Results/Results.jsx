import { ResultsCards, ResultsStyled, Text } from './Results.styled'

// import { Link, useParams } from 'react-router-dom'
import { Loader } from '../../components/UI'
import ResultsCard from './ResultsCard'

import { useParams } from 'react-router-dom'
import { v4 as uid } from 'uuid'
import { useResults } from '../../hooks/useResults'

const Results = () => {
  const { query } = useParams()
  const { loading, data } = useResults(query)

  const renderCard = (item) => {
    return <ResultsCard item={item} key={uid()} />
  }

  return (
    <ResultsStyled>
      <Text>
        Results for: <strong>{query}</strong>
      </Text>
      <ResultsCards>{data?.map(renderCard)}</ResultsCards>
      {loading && <Loader />}
    </ResultsStyled>
  )
}
export default Results
