import { createContext, useState } from 'react'

export const VideoContext = createContext()

export const VideoContextProvider = ({ children }) => {
  const [videoId, setVideoId] = useState(null)
  const [showVideo, setShowVideo] = useState(false)

  function handlePlayVideo(id) {
    setVideoId(id)
    setShowVideo(true)
  }

  function closeVideo() {
    setVideoId(null)
    setShowVideo(false)
  }

  const value = {
    videoId,
    handlePlayVideo,
    showVideo,
    closeVideo,
  }

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
}
