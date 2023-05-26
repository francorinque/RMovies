import { useParams } from 'react-router-dom'
import { VideosStyled } from './Videos.styled.js'
import useFetch from '../../../hooks/useFetch.js'

const Videos = () => {
  const { mediatype, id } = useParams()
  //   const { loading, data } = useFetch(`/${mediatype}/${id}/videos`)

  return <VideosStyled>Videos</VideosStyled>
}
export default Videos
