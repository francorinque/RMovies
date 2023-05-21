import { useState } from 'react'
import useFetch from '../../hooks/useFetch'

import { Title, Top, Wrapper } from '../../styles/GlobalComponents'
import Carousel from '../Carousel/Carousel'
import SwitchTabs from '../Carousel/SwitchTabs/SwitchTabs'

const SlideTrending = () => {
  const [timeWindow, setTimeWindow] = useState('day')
  const { data, loading } = useFetch(`/trending/all/${timeWindow}`)

  const changeTab = (tab) => {
    setTimeWindow(tab.toLowerCase())
  }

  return (
    <Wrapper>
      <Top>
        <Title>Trending</Title>
        <SwitchTabs arr={['Day', 'Week']} changeTab={changeTab} />
      </Top>
      <Carousel data={data} loading={loading} />
    </Wrapper>
  )
}
export default SlideTrending
