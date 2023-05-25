import { Wrapper, WrapperLoader } from './Details.styled.js'

import DetailsBanner from './DetailsBanner/DetailsBanner.jsx'
import DetailsInfo from './DetailsInfo/DetailsInfo.jsx'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsCast from './DetailsCast/DetailsCast.jsx'
import Loader from '../../components/UI/Loader/Loader.jsx'

const Details = () => {
  const { mediatype, id } = useParams()

  const { loading, data: dataDetails } = useFetch(`/${mediatype}/${id}`)

  if (loading) {
    return (
      <WrapperLoader>
        <Loader />
      </WrapperLoader>
    )
  }

  return (
    <Wrapper>
      <DetailsBanner details={dataDetails} />
      <DetailsInfo details={dataDetails} />

      <DetailsCast mediatype={mediatype} id={id} />
    </Wrapper>
  )
}
export default Details
