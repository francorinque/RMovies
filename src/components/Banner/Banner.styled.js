import { styled } from 'styled-components'

export const BannerStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);

  span {
    position: absolute;
    right: 2vw;
    bottom: 2vh;
    font-size: 12px;
    letter-spacing: 2px;
    z-index: 4;
    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .lazy-load-image-background {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
export const OverlayGradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  left: 0;
  bottom: 0;
  background: var(--gradient-overlay);
`

export const Content = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
`

export const Texts = styled.div`
  width: 100%;

  h1 {
    font-size: clamp(30px, 3vw, 50px);
  }

  p {
    font-size: clamp(14px, 2vw, 16px);
    color: var(--color-text-light);
  }
`
