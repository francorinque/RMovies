import { styled } from 'styled-components'

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

//sliders
export const Title = styled.h3`
  font-size: clamp(18px, 2vw, 25px);
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`
