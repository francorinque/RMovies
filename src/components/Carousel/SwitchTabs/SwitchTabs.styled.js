import { styled } from 'styled-components'

let size = '100px'

export const Switch = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  background-color: var(--color-bg);
`

export const Tab = styled.div`
  width: ${size};
  z-index: 3;
  text-align: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  font-size: clamp(12px, 2vw, 14px);
  text-transform: capitalize;
`

export const MovingBox = styled.div`
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: 0;
  width: ${size};
  height: 100%;
  background: var(--gradient);
  z-index: 2;
  border-radius: var(--radius);
  -webkit-transition: all 0.3s cubic-bezier(0.8, 0.05, 0.51, 0.95);
  transition: all 0.3s cubic-bezier(0.8, 0.05, 0.51, 0.95);
`
