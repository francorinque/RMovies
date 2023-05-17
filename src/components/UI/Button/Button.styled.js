import { styled } from 'styled-components'

export const ButtonStyled = styled.button`
  border: none;
  outline: none;
  user-select: none;
  width: ${({ w }) => (w ? `${w}px` : '100px')};
  height: ${({ h }) => (h ? `${h}px` : '40px')};
  border-radius: var(--radius);
  background: ${({ bg }) => (bg ? `${bg}` : 'var(--gradient)')};
  color: ${({ color }) => (color ? `${color}` : 'var(--color-text)')};
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    transition: ease 0.3s;
    box-shadow: 0px 0 20px ${({ bg }) => (bg ? `${bg}` : 'var(--color-ui)')};
  }

  &:active {
    transform: scale(0.95);
  }
`
