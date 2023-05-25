import { Wrapper } from './Details.styled.js'

import DetailsBanner from './DetailsBanner/DetailsBanner.jsx'
import DetailsInfo from './DetailsInfo/DetailsInfo.jsx'

import { dataDetails } from '../../mocks/details.mock.js'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Details = () => {
  const { mediatype, id } = useParams()
  //   const {
  //     data: dataDetails,
  //     loading,
  //     error,
  //   } = useFetch(`/${mediatype}/${id}/credits`)
  const { loading, error, data: dataDetails } = useFetch(`/${mediatype}/${id}`)
  return (
    <Wrapper>
      <DetailsBanner details={dataDetails} />
      <DetailsInfo details={dataDetails} />
    </Wrapper>
  )
}
export default Details
