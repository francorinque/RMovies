import { GenresStyled } from './Genres.styled'

import { useHomeStore } from '../../../store/home'

const Genres = ({ genresArr }) => {
  const { genres } = useHomeStore((state) => state)

  function renderGenres(genreId, i) {
    return genres[genreId] && <p key={genreId + i}>{genres[genreId]}</p>
  }

  return <GenresStyled>{genresArr?.slice(0, 2).map(renderGenres)}</GenresStyled>
}
export default Genres
