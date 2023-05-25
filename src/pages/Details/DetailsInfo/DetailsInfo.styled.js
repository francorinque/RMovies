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
