import { useState, useEffect } from 'react'
import { getDiscoverData } from '../api/axios'

export const useDiscover = (mediatype) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight && hasNextPage) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    setData([])
  }, [mediatype])

  useEffect(() => {
    setLoading(true)
    getDiscoverData(page, mediatype).then((nextData) => {
      setLoading(false)
      if (page === nextData.total_pages) {
        setHasNextPage(false)
        return
      }
      setData((prev) => [...prev, ...nextData.results])
    })
  }, [page, mediatype])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { loading, data }
}
