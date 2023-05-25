import { styled } from 'styled-components'

export const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  border-radius: var(--radius);
  overflow: hidden;
  transition: ease 0.3s;

  @media (min-width: 768px) {
    &:hover {
      transition: ease 0.3s;
      transform: scale(0.95);
    }
  }

  &::after {
    content: '';
    position: absolute;
    display: block;

    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: linear-gradient(
      1deg,
      rgba(24, 24, 24, 1) 0%,
      rgba(255, 255, 255, 0.226) 100%
    );
  }
`

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: 10px;
`
