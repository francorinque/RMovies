import { BannerStyled, OverlayGradient, Content, Texts } from './Banner.styled'

import { LazyImage, Search } from '../UI'

import { useEffect, useState } from 'react'
import { useHomeStore } from '../../store/home'
import useFetch from '../../hooks/useFetch'

const Banner = () => {
  const { data, loading } = useFetch('/movie/now_playing')
  const [random, setRandom] = useState({})
  const { imagesUrl } = useHomeStore((state) => state)

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * data?.results.length)
    setRandom(data?.results[randomNumber])
  }, [data])

  return (
    <BannerStyled>
      {!loading && (
        <LazyImage
          src={imagesUrl.poster + random?.backdrop_path || random?.poster_path}
        />
      )}

      <Content>
        <Texts>
          <h1>Welcome</h1>
          <p>Discover millions of movies or tv shows.</p>
        </Texts>
        <Search inBanner />
      </Content>

      <span>{random?.title}</span>
      <OverlayGradient />
    </BannerStyled>
  )
}
export default Banner
