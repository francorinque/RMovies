import {
  Info,
  Title,
  Stars,
  Flex,
  DivStyled,
  Overview,
} from './DetailsInfo.styled'

import Genres from '../../../components/UI/Genres/Genres'

import { IoStarSharp } from 'react-icons/io5'
import {
  convertDateFromApi,
  convertToHour,
} from '../../../utils/details.utility'
import { useLocation } from 'react-router-dom'

const DetailsInfo = ({ details }) => {
  const { pathname } = useLocation()
  let starsArr = []

  if (details) {
    for (let i = 0; i <= details.vote_average; i++) {
      starsArr.push(i)
    }
  }

  return (
    details && (
      <Info>
        <Title>{details.title || details.original_title}</Title>
        <Genres genresArr={details.genres.map((g) => g.id)} />
        <Stars>
          {starsArr.length > 0 &&
            starsArr
              .slice(0, 6)
              .map((star, i) => (
                <IoStarSharp
                  key={star}
                  color={`${i + 1 !== starsArr.length ? 'orange' : 'black'}`}
                />
              ))}
        </Stars>

        <Flex content='space-around'>
          <DivStyled>
            <p>Year</p>
            <span>
              <strong>
                {pathname.includes('tv')
                  ? convertDateFromApi(details.first_air_date)
                  : convertDateFromApi(details.release_date)}
              </strong>
            </span>
          </DivStyled>
          <DivStyled>
            <p>Country</p>
            <span>
              <strong>
                {convertDateFromApi(details.production_countries[0].name)}
              </strong>
            </span>
          </DivStyled>
          <DivStyled>
            <p>{pathname.includes('tv') ? 'episode runtime' : 'runtime'}</p>
            <span>
              <strong>
                {pathname.includes('tv')
                  ? convertToHour(details.episode_run_time)
                  : convertToHour(details.runtime)}
              </strong>
            </span>
          </DivStyled>
        </Flex>

        <Flex content='center'>
          <Overview>{details.taglain || details.overview}</Overview>
        </Flex>
      </Info>
    )
  )
}
export default DetailsInfo

// episode_run_time
