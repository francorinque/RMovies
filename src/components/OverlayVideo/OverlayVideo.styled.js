import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.603);
  backdrop-filter: blur(3.5px);
  display: grid;
  place-items: center;
  transition: opacity ease 0.2s;
  opacity: ${({ showme }) => (showme === 'true' ? 1 : 0)};
  z-index: 99;
`

export const VideoWrapper = styled.div`
  width: 90%;
  aspect-ratio: 16/9;
  max-width: 700px;
  height: auto;
`

export const Cancel = styled.div`
  position: absolute;
  right: 2vw;
  top: 2vh;
`
