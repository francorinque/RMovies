import { ButtonStyled } from './Button.styled'

const Button = ({ children, onClick, w, h }) => {
  return (
    <ButtonStyled onClick={onClick} w={w} h={h}>
      {children}
    </ButtonStyled>
  )
}
export default Button
