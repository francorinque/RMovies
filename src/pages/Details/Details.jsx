import { Wrapper } from './Details.styled.js'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Info from './Info/Info.jsx'
import Loader from '../../components/UI/Loader/Loader.jsx'

const Details = () => {
  const { mediatype, id } = useParams()
  const { loading, data: dataDetails } = useFetch(`/${mediatype}/${id}`)

  return <Wrapper>{loading ? <Loader /> : <Info data={dataDetails} />}</Wrapper>
}
export default Details
