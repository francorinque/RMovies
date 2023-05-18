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
