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
    font-size: 14px;
    letter-spacing: 2px;
    z-index: 3;
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
  z-index: 2;
  left: 0;
  bottom: 0;
  background: linear-gradient(1deg, #181818ff, #efefef4b);
`

export const Content = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  display: grid;
  place-content: center;
  gap: 20px;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);

  h1 {
    width: 95%;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.4;
    font-size: clamp(25px, 3vw, 40px);
  }
`
