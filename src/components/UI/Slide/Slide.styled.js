import { styled } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel = styled(Swiper)`
  width: 100%;
  height: 500px;
`

export const CarouselItem = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  overflow: hidden;
  user-select: none;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: block;
    background: #0005;
    z-index: 1;
    opacity: 70%;
  }

  h4 {
    position: absolute;
    top: 2vh;
    right: 2vw;
    z-index: 1;
  }

  img {
    object-position: center;
  }
`
