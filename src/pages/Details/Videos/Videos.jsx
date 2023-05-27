import { useContext } from 'react'
import Button from '../../../components/UI/Button/Button.jsx'
import LazyImage from '../../../components/UI/LazyImage/LazyImage.jsx'
import { Slide, Title, WrapperSlide } from '../../../styles/GlobalComponents.js'
import { VideoInner, PlayVideo } from './Videos.styled.js'
import { VideoContext } from '../../../context/VideoContext.jsx'

const Videos = ({ dataVideos, loading }) => {
  const { handlePlayVideo } = useContext(VideoContext)

  if (loading) {
    return <p>LOADING...</p>
  }

  return (
    dataVideos?.length > 0 && (
      <>
        <Title>Videos</Title>
        <WrapperSlide>
          {dataVideos?.map((v) => (
            <Slide key={v.id} w='max-content' h='max-content'>
              <VideoInner>
                <PlayVideo onClick={() => handlePlayVideo(v.key)}>
                  <Button>PLAY</Button>
                </PlayVideo>
                <LazyImage
                  src={`https://img.youtube.com/vi/${v.key}/mqdefault.jpg`}
                  alt={v.name}
                />
              </VideoInner>
            </Slide>
          ))}
        </WrapperSlide>
      </>
    )
  )
}
export default Videos
