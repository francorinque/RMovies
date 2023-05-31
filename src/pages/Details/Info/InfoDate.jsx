import { Flex, InfoDateStyled } from './Info.styled'
import { Subtitle } from '../../../styles/GlobalComponents'

import dayjs from 'dayjs'
import { convertToHour } from '../../../utils/details.utility'

const InfoDate = ({ credits, data }) => {
  let directorArr = credits?.crew
    ?.filter((el) => el.job === 'Director')
    .slice(0, 1)
  let writreArr = credits?.crew
    ?.filter((el) => el.job === 'Story' || el.job === 'Writer')
    .slice(0, 1)
  let date = data?.release_date || data?.first_air_date

  return (
    <InfoDateStyled>
      {/* status */}
      <Flex>
        <Subtitle>Status:</Subtitle>
        <span>{data.status}</span>
      </Flex>
      {/* date */}
      <Flex>
        <Subtitle>Release Date:</Subtitle>
        <span>{dayjs(date).format('MMM D, YYYY')}</span>
      </Flex>
      {/* hour */}
      <Flex>
        <Subtitle>Runtime:</Subtitle>
        <span>{convertToHour(data.runtime || data.episode_run_time[0])}</span>
      </Flex>

      {directorArr?.length > 0 && (
        <Flex>
          <Subtitle>Director:</Subtitle>
          {directorArr.map((el, idx) => (
            <span key={el.id}>
              {el.name}
              {idx !== directorArr.length - 1 && ','}
            </span>
          ))}
        </Flex>
      )}
      {writreArr?.length > 0 && (
        <Flex>
          <Subtitle>Write:</Subtitle>
          {writreArr.map((el, idx) => (
            <span key={el.id}>
              {el.name}
              {idx !== writreArr.length - 1 && ','}
            </span>
          ))}
        </Flex>
      )}
    </InfoDateStyled>
  )
}
export default InfoDate
