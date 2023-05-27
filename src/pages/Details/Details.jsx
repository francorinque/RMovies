import { Wrapper, WrapperInner } from './Details.styled.js'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Info from './Info/Info.jsx'
import Videos from './Videos/Videos.jsx'
import Cast from './Cast/Cast.jsx'
import OverlayVideo from '../../components/OverlayVideo/OverlayVideo.jsx'

const Details = () => {
  const { mediatype, id } = useParams()
  const { loading, data: dataDetails } = useFetch(`/${mediatype}/${id}`)
  const { loading: loadingVideos, data: dataVideos } = useFetch(
    `/${mediatype}/${id}/videos`
  )

  return (
    <>
      <OverlayVideo />
      <Wrapper>
        <Info data={dataDetails} loading={loading} dataVideos={dataVideos} />
        <WrapperInner>
          <Cast />
          <Videos dataVideos={dataVideos?.results} loading={loadingVideos} />
        </WrapperInner>
      </Wrapper>
    </>
  )
}
export default Details

// https://www.youtube.com/watch?v=
