import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Carousel, CarouselItem } from './Slide.styled'
import PosterFallback from '../../../assets/no-poster.png'

import { Navigation, Pagination } from 'swiper'
import { useHomeStore } from '../../../store/home'
import { LazyImage } from '..'

const Slide = ({ data }) => {
  const { imagesUrl } = useHomeStore((state) => state)
  function generateTitle(item) {
    return item.original_name || item.original_title
  }

  return (
    <Carousel
      spaceBetween={30}
      navigation={true}
      pagination={true}
      slidesPerView={3}
      modules={[Navigation, Pagination]}
      breakpoints={{
        250: {
          slidesPerView: 1,
        },
        768: { slidesPerView: 3 },
      }}
    >
      {data?.results.map((item) => (
        <CarouselItem key={item.id}>
          <h4>{generateTitle(item)}</h4>
          {item.backdrop_path ? (
            <LazyImage
              src={`${imagesUrl.backdrop}${item.backdrop_path}`}
              alt={generateTitle(item)}
            />
          ) : (
            <LazyImage src={PosterFallback} alt={generateTitle(item)} />
          )}
        </CarouselItem>
      ))}
    </Carousel>
  )
}
export default Slide
