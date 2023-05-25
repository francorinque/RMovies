import { styled } from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 70vh;
  background: url(${({ bgurl }) => bgurl}) no-repeat center/cover;

  display: flex;
  align-items: flex-end;
  position: relative;
  border-radius: 0 0 var(--radius) var(--radius);

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    inset: 0;
    position: absolute;
    background: var(--gradient-overlay);
    z-index: 1;
    opacity: 90%;
  }
`
export const PlayTrailer = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
`
