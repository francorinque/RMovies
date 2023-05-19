import { useState } from 'react'
import { Switch, Tab, MovingBox } from './SlideTrending.styled'

const SlideSwitchTabs = ({ arr, changeTab }) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleActiveTab = (index, tab) => {
    setActiveTab(index)
    changeTab(tab)
  }

  return (
    <Switch>
      {arr?.map((el, index) => {
        return (
          <Tab key={index} onClick={() => handleActiveTab(index, el)}>
            {el}
          </Tab>
        )
      })}
      <MovingBox left={activeTab * 100} />
    </Switch>
  )
}
export default SlideSwitchTabs
