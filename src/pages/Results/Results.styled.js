import { styled } from 'styled-components'
import { GridCards } from '../../styles/GlobalComponents'

export const ResultsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Text = styled.div`
  width: 100%;
  text-align: start;
`

export const ResultsCards = styled(GridCards)`
  width: 100%;
  min-height: 100vh;
`

export const WrapperCard = styled.div``

export const NoResults = styled.div`
  width: 100%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  p {
    font-size: clamp(30px, 5vw, 60px);
    font-weight: var(--bold);
    color: var(--color-ui);
  }
`
