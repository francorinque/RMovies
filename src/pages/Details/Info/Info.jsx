import {
  InfoBanner,
  BannerContent,
  BannerPoster,
  BannerTexts,
  BannerTagline,
  Flex,
  InfoBannerBg,
  FlexResponsive,
} from './Info.styled'

import { useHomeStore } from '../../../store/home'
import Genres from '../../../components/UI/Genres/Genres'
import CircleProgressbar from '../../../components/UI/CircleProgressbar/CircleProgressbar'
import Button from '../../../components/UI/Button/Button'
import { IoPlayCircleSharp } from 'react-icons/io5'
import LazyImage from '../../../components/UI/LazyImage/LazyImage'
import { Subtitle, Title } from '../../../styles/GlobalComponents'
import { convertToHour } from '../../../utils/details.utility'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import dayjs from 'dayjs'
import { useContext } from 'react'
import { VideoContext } from '../../../context/VideoContext'
import Loader from '../../../components/UI/Loader/Loader'

const Info = ({ data, dataVideos, loading }) => {
  const { mediatype, id } = useParams()
  const { loading: loadingCredits, data: credits } = useFetch(
    `/${mediatype}/${id}/credits`
  )
  const { imagesUrl } = useHomeStore((state) => state)
  const { handlePlayVideo } = useContext(VideoContext)

  let bgSrc = imagesUrl.backdrop + data?.backdrop_path
  let poster = imagesUrl.poster + data?.poster_path
  let directorArr = credits?.crew?.filter((el) => el.job === 'Director')
  let writreArr = credits?.crew
    ?.filter((el) => el.job === 'Story' || el.job === 'Writer')
    .slice(0, 3)

  let date = data?.release_date || data?.first_air_date
  const trailer = dataVideos?.results?.find((v) => v.type === 'Trailer')

  return (
    <div>
      {data && (
        <InfoBanner image={`${bgSrc}`}>
          <InfoBannerBg>
            <LazyImage src={bgSrc} alt='background' />
          </InfoBannerBg>

          <BannerContent>
            <BannerPoster>
              <LazyImage src={poster} alt={data.title} />
            </BannerPoster>

            <BannerTexts>
              <Flex dir='column' gap='0px'>
                <Title>{data.title || data.original_title}</Title>
                {data.tagline && <BannerTagline>{data.tagline}</BannerTagline>}
                <Genres
                  genresArr={data.genres.map((g) => g.id)}
                  content='flex-start'
                />
              </Flex>

              <Flex content='flex-start'>
                <CircleProgressbar
                  width='70px'
                  percentage={data.vote_average}
                />
                {trailer && (
                  <Button
                    w='70'
                    h='70'
                    onClick={() => handlePlayVideo(trailer.key)}
                  >
                    <IoPlayCircleSharp size={25} />
                  </Button>
                )}
              </Flex>

              {data.overview && (
                <Flex dir='column' gap='5px'>
                  <Title>Overview </Title>
                  <p>{data.overview}</p>
                </Flex>
              )}

              <FlexResponsive content='flex-start' gap='20px'>
                <Flex content='flex-start'>
                  <Subtitle>Status:</Subtitle>
                  <span>{data.status}</span>
                </Flex>
                <Flex content='flex-start'>
                  <Subtitle>Release Date:</Subtitle>
                  <span>{dayjs(date).format('MMM D, YYYY')}</span>
                </Flex>
                <Flex content='flex-start'>
                  <Subtitle>Runtime:</Subtitle>
                  <span>
                    {convertToHour(data.runtime || data.episode_run_time[0])}
                  </span>
                </Flex>
                {!loadingCredits && directorArr?.length > 0 && (
                  <Flex content='flex-start'>
                    <Subtitle>Director:</Subtitle>
                    {directorArr.map((el, idx) => (
                      <span key={el.id}>
                        {el.name}
                        {idx !== directorArr.length - 1 && ','}
                      </span>
                    ))}
                  </Flex>
                )}
                {!loadingCredits && writreArr?.length > 0 && (
                  <Flex content='flex-start'>
                    <Subtitle>Write:</Subtitle>
                    {writreArr.map((el, idx) => (
                      <span key={el.id}>
                        {el.name}
                        {idx !== writreArr.length - 1 && ','}
                      </span>
                    ))}
                  </Flex>
                )}
              </FlexResponsive>
            </BannerTexts>
          </BannerContent>
        </InfoBanner>
      )}
    </div>
  )
}
export default Info
