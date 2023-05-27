import Button from '../../../components/UI/Button/Button.jsx'
import LazyImage from '../../../components/UI/LazyImage/LazyImage.jsx'
import { Slide, Title, WrapperSlide } from '../../../styles/GlobalComponents.js'
import { VideoInner, PlayVideo } from './Videos.styled.js'

const Videos = ({ dataVideos, loading }) => {
  console.log(dataVideos)

  return (
    !loading && (
      <section style={{ padding: '0px' }}>
        <Title>Videos</Title>
        <WrapperSlide>
          {dataVideos?.map((el) => (
            <Slide key={el.id} w='max-content' h='max-content'>
              <VideoInner>
                <PlayVideo>
                  <Button>PLAY</Button>
                </PlayVideo>
                <LazyImage
                  src={`https://img.youtube.com/vi/${el.key}/mqdefault.jpg`}
                  alt={el.name}
                />
              </VideoInner>
            </Slide>
          ))}
        </WrapperSlide>
      </section>
    )
  )
}
export default Videos
