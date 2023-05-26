import { styled } from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 0 50px 0 !important;
  min-height: 100vh;
  position: relative;
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
export const WrapperLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
