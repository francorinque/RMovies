import { styled } from 'styled-components'

export const GenresStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  p {
    padding: 5px;
    border-radius: var(--radius);
    font-size: clamp(10px, 1vw, 12px);
    color: var(--color-text-light);
  }
`
