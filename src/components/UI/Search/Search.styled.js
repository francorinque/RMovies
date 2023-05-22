import { css, styled } from 'styled-components'
import { ButtonGlobal } from '../../../styles/GlobalComponents'

export const FormStyled = styled.form`
  background-color: var(--color-text);
  width: 90%;
  margin: 0 auto;
  border-radius: var(--radius);
  display: flex;
  justify-content: space-between;
  position: relative;

  ${({ inBanner }) =>
    inBanner &&
    css`
      max-width: 600px;
    `}
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

export const Btn = styled(ButtonGlobal)``
