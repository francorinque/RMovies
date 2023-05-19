import { Wrapper, Top, Title } from '../../styles/GlobalComponents'
import { Loader, Slide } from '../UI'

import useFetch from '../../hooks/useFetch'

const SlidePopular = ({ title, mediaType }) => {
  const { data, loading } = useFetch(`/${mediaType}/popular`)

  return (
    <Wrapper>
      <Top>
        <Title>{title}</Title>
      </Top>
      {loading && <Loader />}
      <Slide data={data} />
    </Wrapper>
  )
}
export default SlidePopular
