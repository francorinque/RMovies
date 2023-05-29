import { styled } from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 0 50px 0 !important;
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

export const WrapperInner = styled.div`
  width: 100%;
  max-width: var(--max-w);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 10px;
`

export const WrapperLoader = styled.div`
  margin: 100px;
`
