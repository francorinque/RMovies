import { styled } from "styled-components"

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`

export const FooterSocialStyled = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  a {
    border: 1px solid var(--color-text-light);
    padding: 10px;
    border-radius: var(--radius);
    transition: all ease-in 200ms;

    &:hover {
      border: 1px solid var(--color-text);
      transition: all ease-in 200ms;
    }
  }
`
