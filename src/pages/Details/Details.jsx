import { Wrapper } from './Details.styled.js'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Info from './Info/Info.jsx'
import Videos from './Videos/Videos.jsx'
import Cast from './Info/Cast/Cast.jsx'

const Details = () => {
  const { mediatype, id } = useParams()
  const { loading, data: dataDetails } = useFetch(`/${mediatype}/${id}`)
  const { loading: loadingVideos, data: dataVideos } = useFetch(
    `/${mediatype}/${id}/videos`
  )

  return (
    <Wrapper>
      <Info data={dataDetails} loading={loading} />
      <Cast />
      <Videos dataVideos={dataVideos?.results} loading={loadingVideos} />
      {/* <div>similar</div>
      <div>recommended</div> */}
    </Wrapper>
  )
}
export default Details

// https://www.youtube.com/watch?v=
