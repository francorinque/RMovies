import { createContext, useState } from 'react'

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showInput, setShowInput] = useState(false)
  function handleToggle() {
    setShowMenu(!showMenu)
    if (showInput === true) {
      setShowInput(false)
    }
  }

  const value = {
    showMenu,
    setShowMenu,
    handleToggle,
    showInput,
    setShowInput,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
