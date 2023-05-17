import { Header, Nav, NavToggle, NavSearchIcon } from './Navbar.styled'

import Logo from '../UI/Logo/Logo'
import Button from '../UI/Button/Button'
import NavMenu from './NavMenu'

import { IoMenuOutline, IoCloseOutline, IoSearchSharp } from 'react-icons/io5'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
import NavbarSearch from './NavbarSearch/NavbarSearch'

const Navbar = () => {
  const { showMenu, setShowMenu, handleToggle, showInput, setShowInput } =
    useContext(MenuContext)

  function handleSearchIcon() {
    if (showMenu) {
      setShowMenu(false)
    }
    setShowInput(!showInput)
  }

  return (
    <Header show={showMenu.toString()}>
      <Nav>
        <Link to='/'>
          <Logo />
        </Link>

        <NavToggle>
          <Button w={30} h={30} onClick={handleToggle}>
            {showMenu ? (
              <IoCloseOutline size={20} />
            ) : (
              <IoMenuOutline size={20} />
            )}
          </Button>
        </NavToggle>

        <NavMenu />

        <NavSearchIcon onClick={handleSearchIcon}>
          <IoSearchSharp size={20} />
        </NavSearchIcon>

        <NavbarSearch />
      </Nav>
    </Header>
  )
}
export default Navbar
