import {
  Header,
  Nav,
  NavSearchIcon,
  NavToggle,
  WrapperSearch,
} from './Navbar.styled'

import Button from '../UI/Button/Button'
import Logo from '../UI/Logo/Logo'
import NavMenu from './NavMenu'

import { IoCloseOutline, IoMenuOutline, IoSearchSharp } from 'react-icons/io5'

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
import { useNavbar } from '../../hooks/useNavbar'
import { Search } from '../UI'

const Navbar = () => {
  const { showMenu, setShowMenu, handleToggle, showInput, setShowInput } =
    useContext(MenuContext)
  const { showHeader } = useNavbar()

  function handleSearchIcon() {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowInput(!showInput)
    }
  }

  return (
    <Header
      showmenu={showMenu.toString()}
      showinput={showInput.toString()}
      showheader={showHeader}
    >
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

        <WrapperSearch showsearch={showInput.toString()}>
          <Search />
        </WrapperSearch>
      </Nav>
    </Header>
  )
}
export default Navbar
