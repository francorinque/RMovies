import {} from './CastAndCrew.styled.js'

import { useParams } from 'react-router-dom'
import useFetch from '../../../../../hooks/useFetch.js'

import '@splidejs/react-splide/css'
import MySlide from '../../../../../components/MySlide/MySlide.jsx'
import Loader from '../../../../../components/UI/Loader/Loader.jsx'

const CastAndCrew = () => {
  const { mediatype, id } = useParams()
  const { loading, data } = useFetch(`/${mediatype}/${id}/credits`)

  if (loading) {
    return <Loader />
  }

  return (
    data?.cast.length > 0 && (
      <div
        style={{
          maxWidth: 'var(--max-w)',
          marginInline: 'auto',
        }}
      >
        <MySlide title='Top Cast' data={data?.cast} />
      </div>
    )
  )
}
export default CastAndCrew
