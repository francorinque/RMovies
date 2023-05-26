import { Splide, SplideSlide } from '@splidejs/react-splide'
import { css, styled } from 'styled-components'

export const ButtonGlobal = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  transition: transform ease-in 0.3s;
  background-color: var(--color-ui);
  color: var(--color-text);
  padding: 10px 20px;
  border-radius: var(--radius);
  font-weight: var(--semibold);
  font-size: 16px;

  &:active {
    transition: transform ease-in 0.1s;
    transform: scale(0.95);
  }
`

export const Title = styled.h3`
  font-size: clamp(18px, 3vw, 27px);
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
//carousel

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`
//slides

export const WrapperSlide = styled(Splide)`
  width: auto !important;
  height: ${({ h }) => h};
`

export const Slide = styled(SplideSlide)`
  width: ${({ w }) => (w ? w : '100%')} !important;
  height: ${({ h }) => h} !important;

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
      overflow: hidden;
    `}
`

export const Subtitle = styled.h4`
  font-size: 17px;
  font-weight: var(--semibold);
`
