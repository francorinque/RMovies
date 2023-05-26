import { css, styled } from 'styled-components'

export const FormStyled = styled.form`
  background-color: var(--color-text);
  width: 90%;
  border-radius: var(--radius);
  display: flex;
  justify-content: space-between;
  position: relative;

  ${({ inBanner }) =>
    inBanner &&
    css`
      max-width: 800px;
    `}

  button {
    flex: 1 1 30%;
  }
`
export const FieldInput = styled.div`
  width: 100%;
`

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 15px;
  width: 100%;
  height: 100%;
  color: var(--color-text-light);

  &::placeholder {
    opacity: 40%;
  }
`
