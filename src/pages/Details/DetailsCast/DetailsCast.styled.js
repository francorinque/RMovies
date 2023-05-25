import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export const Cast = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`
export const WrapperSlide = styled(Splide)`
  width: 100%;
`

export const Title = styled.div`
  font-size: 18px;
  text-align: start;
  width: 100%;
`

export const Slide = styled(SplideSlide)`
  width: 200px !important;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background: var(--gradient-overlay);
    z-index: 1;
    transition: ease 0.2s;
    opacity: 0;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  p {
    opacity: 0;
    text-align: center;
    position: absolute;
    left: 50%;
    z-index: 2;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    transition: ease 0.2s;
  }

  &:hover p,
  &:hover::after {
    opacity: 1;
    transition: ease 0.2s;
  }
`
