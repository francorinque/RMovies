import { CardStyled, Info } from './Card.styled.js'

import { useHomeStore } from '../../../store/home'

import CircleProgressbar from '../CircleProgressbar/CircleProgressbar'
import LazyImage from '../LazyImage/LazyImage'
import PosterFallback from '../../../assets/no-poster.png'

const Card = ({ item }) => {
  const { imagesUrl, genres } = useHomeStore((state) => state)
  const { title, original_title, poster_path, genre_ids, vote_average } = item
  let imgSrc = `${imagesUrl.poster}${poster_path}`

  function renderGenres(genreId, i) {
    return genres[genreId] && <p key={genreId + i}>{genres[genreId]}</p>
  }

  return (
    <CardStyled>
      <Info>
        <div>{genre_ids?.slice(0, 2).map(renderGenres)}</div>
      </Info>
      {poster_path ? (
        <LazyImage src={imgSrc} alt={title || original_title} />
      ) : (
        <LazyImage src={PosterFallback} alt={title || original_title} />
      )}

      <div
        style={{ position: 'absolute', right: '5px', top: '5px', zIndex: '4' }}
      >
        {vote_average && (
          <CircleProgressbar percentage={vote_average} width='50px' />
        )}
      </div>
    </CardStyled>
  )
}
export default Card
