import { fetchDataFromApi } from '../api/axios'

export async function fetchAllGenres() {
  try {
    const requests = [
      fetchDataFromApi('/genre/movie/list'),
      fetchDataFromApi('/genre/tv/list'),
    ]
    const genres = await Promise.all(requests)

    let unitedGenres = [...new Set(genres[0].genres, genres[1].genres)]

    let newGenres = unitedGenres.reduce((acc, genre) => {
      if (!acc[genre.id]) {
        acc[genre.id] = genre.name
      }
      return acc
    }, {})
    return newGenres
  } catch (error) {
    console.log(error)
  }
}
