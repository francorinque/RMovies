import { styled } from 'styled-components'

export const Search = styled.div`
  width: 100%;
  max-width: 1300px;
  position: fixed;
  top: ${({ show }) => (show === 'true' ? 'var(--h-header)' : '-200px')};
  left: 50%;
  transform: translateX(-50%);
  transition: ease 0.3s;

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    text-align: center;
  }
`
