import { useState, useEffect } from 'react'
import { getDataPage } from '../api/axios'

export const useInfiniteScroll = (query, pageNum = 1) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [dataResults, setDataResults] = useState([])
  const [hasNextPage, setHasNextPage] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    const controller = new AbortController()
    const { signal } = controller

    getDataPage(query, pageNum, { signal })
      .then((data) => {
        setDataResults((prev) => prev.concat(...data.results))
        setHasNextPage(Boolean(data.results.length))
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        if (signal.aborted) return
        setError(e)
      })

    return () => controller.abort()
  }, [query, pageNum])

  return { loading, error, dataResults, hasNextPage }
}

// total_pages
