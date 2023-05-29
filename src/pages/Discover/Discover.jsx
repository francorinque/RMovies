import { DiscoverStyled } from './Discover.styled.js'

import { v4 as uuid } from 'uuid'
import { useParams } from 'react-router-dom'
import { Card, Loader } from '../../components/UI'
import { useDiscover } from '../../hooks/useDiscover.js'

const Discover = () => {
  const { mediatype } = useParams()
  const { data, loading } = useDiscover(mediatype)

  return (
    <>
      <DiscoverStyled>
        {data?.map((item) => {
          return <Card item={item} key={uuid()} mediatypeFallback={mediatype} />
        })}
      </DiscoverStyled>
      {loading && <Loader />}
    </>
  )
}
export default Discover
