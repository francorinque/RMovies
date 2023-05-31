import {
  InfoBanner,
  BannerContent,
  BannerPoster,
  BannerTexts,
  BannerTagline,
  Flex,
  InfoBannerBg,
} from './Info.styled'

import { useHomeStore } from '../../../store/home'
import Genres from '../../../components/UI/Genres/Genres'
import CircleProgressbar from '../../../components/UI/CircleProgressbar/CircleProgressbar'
import Button from '../../../components/UI/Button/Button'
import { IoPlayCircleSharp } from 'react-icons/io5'
import LazyImage from '../../../components/UI/LazyImage/LazyImage'
import { Title } from '../../../styles/GlobalComponents'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useContext } from 'react'
import { VideoContext } from '../../../context/VideoContext'
import InfoDate from './InfoDate'

const Info = ({ data, dataVideos }) => {
  const { mediatype, id } = useParams()
  const { loading: loadingCredits, data: credits } = useFetch(
    `/${mediatype}/${id}/credits`
  )
  const { imagesUrl } = useHomeStore((state) => state)
  const { handlePlayVideo } = useContext(VideoContext)
  let bgSrc = imagesUrl.backdrop + data?.backdrop_path
  let poster = imagesUrl.poster + data?.poster_path
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
                <Genres genresArr={data.genres.map((g) => g.id)} />
              </Flex>

              <Flex>
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

              <InfoDate data={data} credits={credits} />
            </BannerTexts>
          </BannerContent>
        </InfoBanner>
      )}
    </div>
  )
}
export default Info
