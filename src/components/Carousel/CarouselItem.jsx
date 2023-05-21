import { useHomeStore } from '../../store/home'
import { CarouselItemStyled, Info } from './Carousel.styled'

import PosterFallback from '../../assets/no-poster.png'
import { LazyImage } from '../UI'

const CarouselItem = ({ item }) => {
  const { imagesUrl, genres } = useHomeStore((state) => state)
  const { title, original_title, poster_path, genre_ids } = item
  let imgSrc = `${imagesUrl.poster}${poster_path}`

  function renderGenres(genreId, i) {
    return genres[genreId] && <p key={genreId + i}>{genres[genreId]}</p>
  }

  return (
    <CarouselItemStyled>
      <Info>
        <div>{genre_ids.slice(0, 2).map(renderGenres)}</div>
      </Info>
      {poster_path ? (
        <LazyImage src={imgSrc} alt={title || original_title} />
      ) : (
        <LazyImage src={PosterFallback} alt={title || original_title} />
      )}
    </CarouselItemStyled>
  )
}
export default CarouselItem
