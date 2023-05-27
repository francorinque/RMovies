import { Overlay, VideoWrapper, Cancel } from './OverlayVideo.styled.js'

import { useContext } from 'react'
import { VideoContext } from '../../context/VideoContext.jsx'
import ReactPlayer from 'react-player'
import Button from '../UI/Button/Button.jsx'

const OverlayVideo = () => {
  const { videoId, showVideo, closeVideo } = useContext(VideoContext)

  return (
    videoId !== null && (
      <Overlay showme={showVideo.toString()} onClick={closeVideo}>
        <Cancel>
          <Button w={30} h={30} onClick={closeVideo}>
            X
          </Button>
        </Cancel>
        <VideoWrapper>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width='100%'
            height='100%'
          />
        </VideoWrapper>
      </Overlay>
    )
  )
}
export default OverlayVideo
