import { Wrapper } from './Details.styled.js'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Info from './Info/Info.jsx'
import Videos from './Videos/Videos.jsx'
import CastAndCrew from './Info/CastAndCrew/CastAndCrew.jsx/CastAndCrew.jsx'

const Details = () => {
  const { mediatype, id } = useParams()
  const { loading, data: dataDetails } = useFetch(`/${mediatype}/${id}`)

  return (
    <Wrapper>
      <Info data={dataDetails} loading={loading} />
      <CastAndCrew />
      <Videos />
      {/* <div>similar</div>
      <div>recommended</div> */}
    </Wrapper>
  )
}
export default Details

// https://www.youtube.com/watch?v=
