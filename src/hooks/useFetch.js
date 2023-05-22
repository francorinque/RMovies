import { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../api/axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setData(null)
    setError(null)

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false)
        setData(res)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch
