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

export const getResultsData = async (query, page = 1) => {
  try {
    const { data } = await API.get(`/search/multi?query=${query}&page=${page}`)
    return data
  } catch (error) {
    return error
  }
}

export const getDiscoverData = async (page = 1, mediatype) => {
  try {
    const { data } = await API.get(`/discover/${mediatype}?page=${page}`)
    return data
  } catch (error) {
    return error.message
  }
}
