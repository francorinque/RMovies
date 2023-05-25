import { Cast, Title, WrapperSlide, Slide } from './DetailsCast.styled.js'

import { useHomeStore } from '../../../store/home.js'
import ProfileFallback from '../../../assets/ProfileFallback.jpg'
import '@splidejs/react-splide/css'
import useFetch from '../../../hooks/useFetch.js'
import Loader from '../../../components/UI/Loader/Loader.jsx'

const DetailsCast = ({ mediatype, id }) => {
  const { imagesUrl } = useHomeStore((state) => state)
  const { data, loading } = useFetch(`/${mediatype}/${id}/credits`)

  const options = {
    perPage: 1,
    gap: '20px',
    pagination: false,
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Cast>
      <Title>Cast:</Title>
      <WrapperSlide options={options}>
        {data?.cast.map((person) => (
          <Slide key={person.id}>
            {!person.profile_path ? (
              <img src={ProfileFallback} alt={person.name} />
            ) : (
              <img
                src={`${imagesUrl.profile}${person.profile_path}`}
                alt={person.name}
              />
            )}
            <p>{person.name}</p>
          </Slide>
        ))}
      </WrapperSlide>
    </Cast>
  )
}
export default DetailsCast
