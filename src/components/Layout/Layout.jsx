import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LayoutStyled } from './Layout.styled'

const Layout = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return <LayoutStyled>{children}</LayoutStyled>
}
export default Layout
