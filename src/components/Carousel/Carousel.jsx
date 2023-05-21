import { useRef } from 'react'
import { CarouselStyled, CarouselItems } from './Carousel.styled'
import CarouselItem from './CarouselItem'
import Arrows from './Arrows/Arrows'
import { SkItem } from '../UI'

const Carousel = ({ data, loading }) => {
  const containerRef = useRef()
  const navigation = (dir) => {
    const container = containerRef.current

    const scrollAmount =
      dir === 'left'
        ? container.scrollLeft - container.offsetWidth + 30
        : container.scrollLeft + container.offsetWidth + 30

    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <CarouselStyled>
      <CarouselItems ref={containerRef}>
        {loading ? (
          <>
            <SkItem />
            <SkItem />
            <SkItem />
            <SkItem />
          </>
        ) : (
          data?.results.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))
        )}
      </CarouselItems>
      <Arrows navigation={navigation} />
    </CarouselStyled>
  )
}
export default Carousel
