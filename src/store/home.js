import { create } from 'zustand'
import { fetchDataFromApi } from '../api/axios'

export const useHomeStore = create((set) => ({
  imagesUrl: {},
  genres: {},
  setImagesUrl: async () => {
    try {
      const data = await fetchDataFromApi('/configuration')
      const urls = {
        backdrop: data.images.secure_base_url + 'original',
        poster: data.images.secure_base_url + 'original',
        profile: data.images.secure_base_url + 'original',
      }
      set({ imagesUrl: urls })
    } catch (error) {
      console.log(error)
    }
  },
}))
