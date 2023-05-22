import { Top, Wrapper, Title } from '../../styles/GlobalComponents'
import SwitchTabs from '../Carousel/SwitchTabs/SwitchTabs'
import Carousel from '../Carousel/Carousel'

import { useState } from 'react'
import useFetch from '../../hooks/useFetch'

const SlideTopRated = () => {
  const [mediaType, setMediaType] = useState('tv')
  const { data, loading } = useFetch(`/${mediaType}/top_rated`)

  const changeTab = (mediatype) => {
    setMediaType(mediatype)
  }

  return (
    <Wrapper>
      <Top>
        <Title>Top Rated</Title>
        <SwitchTabs arr={['tv', 'movie']} changeTab={changeTab} />
      </Top>
      <Carousel data={data} loading={loading} />
    </Wrapper>
  )
}
export default SlideTopRated
