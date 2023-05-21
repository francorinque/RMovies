import { styled } from 'styled-components'

export const CarouselStyled = styled.div`
  position: relative;
  width: 90%;
  max-width: var(--max-w);
  margin: 0 auto;
`

export const CarouselItems = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  grid-auto-rows: 100%;
  column-gap: 20px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CarouselItemStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  border-radius: var(--radius);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    display: block;

    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: linear-gradient(
      1deg,
      rgba(24, 24, 24, 1) 0%,
      rgba(255, 255, 255, 0.226) 100%
    );

    @media (min-width: 768px) {
      background: none;
    }
  }

  @media (min-width: 768px) {
    &:hover::after {
      background: linear-gradient(
        1deg,
        rgba(24, 24, 24, 1) 0%,
        rgba(255, 255, 255, 0.226) 100%
      );
    }
  }
`

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: 10px;

  div {
    display: flex;
    gap: 10px;
  }

  div > p {
    background: var(--color-ui);
    padding: 5px;
    border-radius: var(--radius);
    font-size: clamp(10px, 1vw, 12px);
  }
`
