import { Search } from './NavbarSearch.styled'

import { useContext } from 'react'
import { MenuContext } from '../../../context/MenuContext'

const NavbarSearch = () => {
  const { showInput } = useContext(MenuContext)
  return (
    <Search show={showInput.toString()}>
      <input type='text' placeholder='Search for Movie or Tv show...' />
    </Search>
  )
}
export default NavbarSearch
