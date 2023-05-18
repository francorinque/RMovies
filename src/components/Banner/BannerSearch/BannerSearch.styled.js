import { styled } from 'styled-components'
import { ButtonGlobal } from '../../../styles/GlobalComponents'

export const FieldInput = styled.div`
  background-color: var(--color-text);
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: var(--radius);
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 15px;
  width: 100%;
  color: var(--color-text-light);

  &::placeholder {
    opacity: 40%;
  }
`

export const Btn = styled(ButtonGlobal)``
