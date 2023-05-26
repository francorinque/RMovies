import { Wrapper } from './Details.styled.js'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Info from './Info/Info.jsx'

const Details = () => {
  const { mediatype, id } = useParams()
  const { loading, data: dataDetails } = useFetch(`/${mediatype}/${id}`)

  return (
    <Wrapper>
      <Info loading={loading} data={dataDetails} />
    </Wrapper>
  )
}
export default Details
