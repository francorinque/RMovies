import { Title, Top, Wrapper } from '../../styles/GlobalComponents'

import Carousel from '../Carousel/Carousel'

import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import SwitchTabs from '../Carousel/SwitchTabs/SwitchTabs'

const SlidePopular = () => {
  const [mediaType, setMediaType] = useState('tv')
  const { data, loading } = useFetch(`/${mediaType}/popular`)

  const changeTab = (mediatype) => {
    setMediaType(mediatype)
  }

  return (
    <Wrapper>
      <Top>
        <Title>Popular</Title>
        <SwitchTabs arr={['tv', 'movie']} changeTab={changeTab} />
      </Top>
      <Carousel data={data} loading={loading} />
    </Wrapper>
  )
}
export default SlidePopular
