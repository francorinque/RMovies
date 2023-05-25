import { Info, Title, Stars, Flex } from './DetailsInfo.styled'

import Genres from '../../../components/UI/Genres/Genres'

import { IoStarSharp } from 'react-icons/io5'
import {
  convertDateFromApi,
  convertToHour,
} from '../../../utils/details.utility'

const DetailsInfo = ({ details }) => {
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
          <div>
            <p>Year</p>
            <span>
              <strong>{convertDateFromApi(details.release_date)}</strong>
            </span>
          </div>
          <div>
            <p>Country</p>
            <span>
              <strong>{convertDateFromApi(details.release_date)}</strong>
            </span>
          </div>
          <div>
            <p>Length</p>
            <span>
              <strong>{convertToHour(details.runtime)}</strong>
            </span>
          </div>
        </Flex>

        <Flex content='center'>
          <p>{details.taglain || details.overview}</p>
        </Flex>
      </Info>
    )
  )
}
export default DetailsInfo
