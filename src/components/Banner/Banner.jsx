import { BannerStyled, OverlayGradient, Content } from './Banner.styled'

import { LazyImage } from '../UI'

import { useEffect, useState } from 'react'
import { useHomeStore } from '../../store/home'
import useFetch from '../../hooks/useFetch'
import BannerSearch from './BannerSearch/BannerSearch'

const Banner = () => {
  const [random, setRandom] = useState({})
  const { imagesUrl } = useHomeStore((state) => state)
  const { data, loading } = useFetch('/movie/now_playing')

  useEffect(
    function () {
      let interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * data?.results.length)
        let randomObj = data?.results[randomNumber]
        setRandom(randomObj)
      }, 5000)

      return () => clearInterval(interval)
    },
    [data]
  )

  return (
    <BannerStyled>
      {!loading && (
        <LazyImage
          src={imagesUrl.poster + random?.backdrop_path || random?.poster_path}
        />
      )}
      <Content>
        <h1>Sumergete en el mundo del entretenimiento.</h1>
        <BannerSearch />
      </Content>
      <span>{random?.title}</span>
      <OverlayGradient />
    </BannerStyled>
  )
}
export default Banner
