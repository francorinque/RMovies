import {} from './CastAndCrew.styled.js'

import { useParams } from 'react-router-dom'
import useFetch from '../../../../../hooks/useFetch.js'

import '@splidejs/react-splide/css'
import MySlide from '../../../../../components/MySlide/MySlide.jsx'
import Loader from '../../../../../components/UI/Loader/Loader.jsx'
import { Title } from '../../../../../styles/GlobalComponents.js'

const CastAndCrew = () => {
  const { mediatype, id } = useParams()
  const { loading, data } = useFetch(`/${mediatype}/${id}/credits`)

  let director = data?.crew?.filter((el) => el.job === 'Director')

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {data?.cast.length > 0 ? (
        <MySlide title='Top Cast' data={data?.cast} />
      ) : null}

      {director?.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Title>Directed By:</Title>
          <div style={{ display: 'flex', gap: '5px' }}>
            {director?.map((el, idx) => (
              <a
                href={`https://es.wikipedia.org/wiki/${el.name}`}
                key={el.id}
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: 'underline' }}
              >
                {el.name}
                {idx !== director.length - 1 && ','}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
export default CastAndCrew
