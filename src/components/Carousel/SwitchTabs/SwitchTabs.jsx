import { MovingBox, Switch, Tab } from './SwitchTabs.styled'

import { useState } from 'react'

const SwitchTabs = ({ arr, changeTab }) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleActiveTab = (index, text) => {
    setActiveTab(index)
    changeTab(text)
  }

  return (
    <Switch>
      {arr?.map((text, index) => {
        return (
          <Tab key={index} onClick={() => handleActiveTab(index, text)}>
            {text}
          </Tab>
        )
      })}
      <MovingBox left={activeTab * 100} />
    </Switch>
  )
}

export default SwitchTabs
