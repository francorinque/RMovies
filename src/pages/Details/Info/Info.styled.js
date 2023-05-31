import styled from 'styled-components'

export const InfoBanner = styled.div`
  width: 100%;
  position: relative;
`

export const InfoBannerBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--gradient-overlay);
    top: 0;
    left: 0;
    z-index: 1;
  }
`

export const BannerContent = styled.div`
  width: 100%;
  max-width: var(--max-w);
  margin-inline: auto;
  min-height: 100vh;
  padding: calc(var(--h-header) + 30px) 10px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 400px 550px;
    grid-auto-rows: max-content;
    gap: 10px;
    justify-content: center;
  }
`

export const BannerPoster = styled.div`
  width: 100%;
  margin-inline: auto;

  img {
    border-radius: var(--radius);
  }
`

export const BannerTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  max-width: 600px;
  justify-content: flex-start;
`

export const BannerTagline = styled.span`
  color: var(--color-text-light);
  font-size: 20px;
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ dir }) => (dir ? dir : 'row')};
  justify-content: flex-start;
  text-align: initial;
  gap: ${({ gap }) => (gap ? gap : '20px')};

  p {
    color: var(--color-text-light);
    max-width: 700px;
  }
`

export const InfoDateStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  @media (width > 600px) {
    column-gap: 20px;
    grid-template-columns: repeat(2, max-content);
  }
`
