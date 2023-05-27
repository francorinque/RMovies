import { Slide, Title, WrapperSlide } from '../../../styles/GlobalComponents'

import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch.js'
import { useHomeStore } from '../../../store/home.js'
import Loader from '../../../components/UI/Loader/Loader.jsx'
import LazyImage from '../../../components/UI/LazyImage/LazyImage.jsx'
import ProfileFallback from '../../../assets/ProfileFallback.jpg'

const Cast = () => {
  const { imagesUrl } = useHomeStore((state) => state)
  const { mediatype, id } = useParams()
  const { loading, data } = useFetch(`/${mediatype}/${id}/credits`)

  if (loading) {
    return <Loader />
  }

  return (
    data?.cast.length > 0 && (
      <>
        <Title>Top Cast</Title>
        <WrapperSlide>
          {data?.cast.map((person) => {
            let imgUrl = person.profile_path
              ? imagesUrl.profile + person.profile_path
              : ProfileFallback
            return (
              <Slide key={person.id} w='150px' h='max-content'>
                <LazyImage src={imgUrl} alt={person.name} />
              </Slide>
            )
          })}
        </WrapperSlide>
      </>
    )
  )
}
export default Cast
