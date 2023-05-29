import { WrapperCard } from './Results.styled'

import { Card } from '../../components/UI'

const ResultsCard = ({ item }) => {
  return (
    <WrapperCard>
      <Card item={item} />
    </WrapperCard>
  )
}
export default ResultsCard
