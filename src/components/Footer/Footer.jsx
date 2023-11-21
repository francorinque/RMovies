import { FooterSocialStyled, FooterStyled } from "./Footer.styled"

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Developed by <strong>Franco Rinque</strong>{" "}
      </p>

      <FooterSocialStyled>
        <a href="https://github.com/francorinque">Github</a>
        <a href="https://www.linkedin.com/in/francorinque">Linkedin</a>
      </FooterSocialStyled>
    </FooterStyled>
  )
}
export default Footer
