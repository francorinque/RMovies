import {
  InfoBanner,
  BannerContent,
  BannerPoster,
  BannerTitle,
  BannerTexts,
  BannerTagline,
  Flex,
  OverviewTitle,
} from './Info.styled'

import { useHomeStore } from '../../../store/home'
import Genres from '../../../components/UI/Genres/Genres'
import CircleProgressbar from '../../../components/UI/CircleProgressbar/CircleProgressbar'
// import LazyImage from '../../../components/UI/LazyImage/LazyImage'
import Button from '../../../components/UI/Button/Button'
import { IoPlayCircleSharp } from 'react-icons/io5'

const Info = ({ loading, data }) => {
  const { imagesUrl } = useHomeStore((state) => state)
  let bgSrc = imagesUrl.backdrop + data?.backdrop_path
  let poster = imagesUrl.poster + data?.poster_path

  return (
    <>
      {data && (
        <InfoBanner image={`${bgSrc}`}>
          <BannerContent>
            <BannerPoster>
              <img src={poster} alt={data.title} />
              {/* <LazyImage src={poster} alt={data.title} /> */}
            </BannerPoster>

            <BannerTexts>
              <Flex dir='column' gap='0px'>
                <BannerTitle>{data.title}</BannerTitle>
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
                  <OverviewTitle>Overview: </OverviewTitle>
                  <p>{data.overview}</p>
                </Flex>
              )}
            </BannerTexts>
          </BannerContent>
        </InfoBanner>
      )}
    </>
  )
}
export default Info
