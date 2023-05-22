import { styled, keyframes } from 'styled-components'

const PictureAnimation = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  gap: 5px;

  img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    animation: ${PictureAnimation} ease 0.6s;
  }
`

export const Text = styled.div`
  font-size: clamp(30px, 3vw, 50px);
  font-weight: var(--bold);
`
