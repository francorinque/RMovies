import { CarouselItems, CarouselStyled } from './Carousel.styled'

import { useRef } from 'react'

import Arrows from './Arrows/Arrows'
import { Card, SkItem } from '../UI'

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
          data?.results.map((item) => <Card key={item.id} item={item} />)
        )}
      </CarouselItems>
      <Arrows navigation={navigation} />
    </CarouselStyled>
  )
}
export default Carousel
