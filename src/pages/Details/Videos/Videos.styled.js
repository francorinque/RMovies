import styled from 'styled-components'

export const VideosStyled = styled.div`
  max-width: var(--max-w);
  margin-inline: auto;
`

export const VideoName = styled.p`
  font-size: 12px;
  text-align: start;
`

export const VideoInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const PlayVideo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: var(--gradient-overlay);
`
