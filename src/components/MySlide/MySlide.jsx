import { useHomeStore } from '../../store/home'
import { WrapperSlide, Slide, Title } from '../../styles/GlobalComponents'
import LazyImage from '../UI/LazyImage/LazyImage'
import ProfileFallback from '../../assets/ProfileFallback.jpg'

const MySlide = ({ data, title }) => {
  const { imagesUrl } = useHomeStore((state) => state)

  return (
    <>
      <Title>{title}</Title>
      <WrapperSlide
        options={{
          gap: 20,
          pagination: false,
          arrows: data?.length > 5 ? true : false,
        }}
      >
        {data.map((person) => {
          let imgUrl = person.profile_path
            ? imagesUrl.profile + person.profile_path
            : ProfileFallback
          return (
            <Slide key={person.id} w='150px' h='150px' rounded>
              <LazyImage src={imgUrl} alt={person.name} />
            </Slide>
          )
        })}
      </WrapperSlide>
    </>
  )
}
export default MySlide
