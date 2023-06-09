import { useContext } from 'react'
import Button from '../../../components/UI/Button/Button.jsx'
import LazyImage from '../../../components/UI/LazyImage/LazyImage.jsx'
import { Slide, Title, WrapperSlide } from '../../../styles/GlobalComponents.js'
import { VideoInner, PlayVideo } from './Videos.styled.js'
import { VideoContext } from '../../../context/VideoContext.jsx'
import Loader from '../../../components/UI/Loader/Loader.jsx'

const Videos = ({ dataVideos, loading }) => {
  const { handlePlayVideo } = useContext(VideoContext)

  if (loading) {
    return <Loader />
  }

  return (
    dataVideos?.length > 0 && (
      <>
        <Title>Videos</Title>
        <WrapperSlide h='160px'>
          {dataVideos.map((v) => (
            <Slide key={v.id} w='290px' h='160px'>
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
