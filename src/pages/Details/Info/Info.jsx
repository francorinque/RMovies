import {
  InfoBanner,
  BannerContent,
  BannerPoster,
  BannerTexts,
  BannerTagline,
  Flex,
} from './Info.styled'

import { useHomeStore } from '../../../store/home'
import Genres from '../../../components/UI/Genres/Genres'
import CircleProgressbar from '../../../components/UI/CircleProgressbar/CircleProgressbar'
import Button from '../../../components/UI/Button/Button'
import { IoPlayCircleSharp } from 'react-icons/io5'
import LazyImage from '../../../components/UI/LazyImage/LazyImage'
import { Title } from '../../../styles/GlobalComponents'
import CastAndCrew from './CastAndCrew/CastAndCrew.jsx/CastAndCrew'

const Info = ({ data }) => {
  const { imagesUrl } = useHomeStore((state) => state)
  let bgSrc = imagesUrl.backdrop + data?.backdrop_path
  let poster = imagesUrl.poster + data?.poster_path

  return (
    <>
      {data && (
        <InfoBanner image={`${bgSrc}`}>
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
                <Button w='70' h='70'>
                  <IoPlayCircleSharp size={25} />
                </Button>
              </Flex>

              {data.overview && (
                <Flex dir='column' gap='5px'>
                  <Title>Overview: </Title>
                  <p>{data.overview}</p>
                </Flex>
              )}

              <CastAndCrew />
            </BannerTexts>
          </BannerContent>
        </InfoBanner>
      )}
    </>
  )
}
export default Info
