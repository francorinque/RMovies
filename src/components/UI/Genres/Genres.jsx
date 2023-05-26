import { GenresStyled } from './Genres.styled'

import { useHomeStore } from '../../../store/home'

const Genres = ({ genresArr, content }) => {
  const { genres } = useHomeStore((state) => state)

  function renderGenres(genreId, i) {
    return genres[genreId] && <p key={genreId + i}>{genres[genreId]}</p>
  }

  return (
    <GenresStyled content={content}>
      {genresArr?.slice(0, 2).map(renderGenres)}
    </GenresStyled>
  )
}
export default Genres
