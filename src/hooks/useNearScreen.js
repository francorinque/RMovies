import { useState, useEffect } from 'react'

export const useNearScreen = ({
  distance = '100px',
  once = false,
  externalRef,
}) => {
  const [isNearScreen, setIsNearScreen] = useState(false)

  const onChange = (entries, observer) => {
    const el = entries[0]
    if (el.isIntersecting) {
      setIsNearScreen(true)
      once && observer.disconnect()
    } else {
      !once && setIsNearScreen(false)
    }
  }

  useEffect(() => {
    let observer

    const element = externalRef.current

    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    if (element) observer.observe(element)

    return () => observer && observer.disconnect()
  }, [])

  return { isNearScreen }
}
