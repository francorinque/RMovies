import { FooterSocialStyled, FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Developed by <strong>Franco Rinque</strong>{" "}
      </p>

      <FooterSocialStyled>
        <a
          href="https://github.com/francorinque"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/francorinque"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </FooterSocialStyled>
    </FooterStyled>
  );
};
export default Footer;
