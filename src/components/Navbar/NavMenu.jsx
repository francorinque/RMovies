import { Menu, MenuItem } from './Navbar.styled'

import { IoHomeOutline, IoTvOutline, IoPlayOutline } from 'react-icons/io5'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

const myLinks = [
  { id: 1, text: 'Home', to: '/', icon: <IoHomeOutline /> },
  { id: 2, text: 'Movies', to: '/discover/movie', icon: <IoPlayOutline /> },
  { id: 3, text: 'Tv show', to: '/discover/tv', icon: <IoTvOutline /> },
]

const NavMenu = () => {
  const { showMenu, setShowMenu } = useContext(MenuContext)
  function handleCloseMenu() {
    setShowMenu(false)
  }

  return (
    <Menu show={showMenu.toString()}>
      {myLinks.map(({ id, text, to, icon }) => (
        <MenuItem
          key={id}
          to={to}
          activeclassname='active'
          onClick={handleCloseMenu}
        >
          <div>
            {icon}
            {text}
          </div>
        </MenuItem>
      ))}
    </Menu>
  )
}
export default NavMenu
