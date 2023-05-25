import styled from 'styled-components'

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0;
`

export const Title = styled.h4`
  font-size: 25px;
  text-align: center;
`

export const Stars = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ content }) => `${content}`};
  align-items: center;
  text-align: center;
`

export const DivStyled = styled.div`
  text-align: center;
  width: 100%;
  font-size: clamp(12px, 2vw, 14px);
`

export const Overview = styled.div`
  font-size: clamp(14px, 3vw, 18px);
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
  color: var(--color-text-light);
`
