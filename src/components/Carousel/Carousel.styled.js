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
