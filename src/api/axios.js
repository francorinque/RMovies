import axios from 'axios'

const TOKEN = import.meta.env.VITE_API_TOKEN

export const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + TOKEN,
  },
})

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await API.get(url)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getDataPage = async (query, pageParam = 1, options = {}) => {
  try {
    const { data } = await API.get(
      `/search/multi?query=${query}&page=${pageParam}`,
      { options }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
