import { styled } from 'styled-components'

export const ResultsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Text = styled.div`
  width: 100%;
  text-align: start;
`

export const ResultsCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  place-items: center;

  @media (min-width: 768px) {
    padding: 0 20px;
  }
`

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
