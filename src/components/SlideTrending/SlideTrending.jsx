import SlideSwitchTabs from './SlideSwitchTabs'
import { Loader, Slide } from '../UI'

import useFetch from '../../hooks/useFetch'
import { useState } from 'react'
import { Wrapper, Top, Title } from '../../styles/GlobalComponents'

const SlideTrending = ({ title, mediaType }) => {
  const [timeWindow, setTimeWindow] = useState('day')

  const { data, loading } = useFetch(`/trending/${mediaType}/${timeWindow}`)

  const changeTab = (tab) => {
    setTimeWindow(tab.toLowerCase())
  }

  return (
    <Wrapper>
      <Top>
        <Title>{title}</Title>
        <SlideSwitchTabs arr={['Day', 'Week']} changeTab={changeTab} />
      </Top>
      {loading && <Loader />}
      <Slide data={data} />
    </Wrapper>
  )
}
export default SlideTrending
