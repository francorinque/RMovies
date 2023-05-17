import axios from 'axios'

const TOKEN = import.meta.env.VITE_API_TOKEN

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + TOKEN,
  },
})

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await API.get(url, { params })
    return data
  } catch (error) {
    console.log(error)
  }
}
