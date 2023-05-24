import { WrapperCard } from './Results.styled'

import { forwardRef } from 'react'
import { Card } from '../../components/UI'

const ResultsCard = forwardRef(({ item }, ref) => {
  return ref ? (
    <WrapperCard ref={ref}>
      <Card item={item} />
    </WrapperCard>
  ) : (
    <WrapperCard>
      <Card item={item} />
    </WrapperCard>
  )
})
export default ResultsCard
