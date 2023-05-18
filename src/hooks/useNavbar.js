import { useCallback, useEffect, useState } from 'react'

export const useNavbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showHeader, setShowHeader] = useState('top')

  const controlNavbar = useCallback(() => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShowHeader('hide')
      } else {
        setShowHeader('show')
      }
    } else {
      setShowHeader('top')
    }
    setLastScrollY(window.scrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => removeEventListener('scroll', controlNavbar)
  }, [controlNavbar])

  return { showHeader }
}
