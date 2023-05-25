import { styled } from 'styled-components'

export const Wrapper = styled.section`
  padding: 0 !important;
  min-height: 100vh;
`
export const Banner = styled.div`
  position: relative;

  > div:nth-of-type(1) {
    position: absolute;
    left: 0;
    bottom: 20px;
    display: block;
    width: 100%;
    text-align: start;
    padding: 0 20px;
    font-size: 20px;
    font-weight: var(--semibold);
  }
`
