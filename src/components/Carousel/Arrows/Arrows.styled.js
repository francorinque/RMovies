import { styled } from 'styled-components'

export const ArrowsStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`

export const ArrowLeft = styled.div`
  position: absolute;
  left: 0;
  @media (min-width: 768px) {
    left: -30px;
  }
`
export const ArrowRight = styled.div`
  position: absolute;
  right: 0;
  @media (min-width: 768px) {
    right: -30px;
  }
`
