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
    grid-template-columns: 400px 1fr;
    justify-items: center;
    justify-content: center;
  }

  @media (min-width: 998px) {
    grid-template-columns: 400px 480px;
  }
`

export const BannerPoster = styled.div`
  width: 100%;
  border-radius: var(--radius);
  img {
    border-radius: var(--radius);
  }
`

export const BannerTexts = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`

export const BannerTagline = styled.span`
  color: var(--color-text-light);
  font-size: 20px;
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ dir }) => (dir ? dir : 'row')};
  justify-content: ${({ content }) => (content ? content : 'center')};
  align-items: ${({ dir }) => (dir === 'column' ? 'flex-start' : 'center')};
  text-align: initial;
  gap: ${({ gap }) => (gap ? gap : '20px')};

  p {
    color: var(--color-text-light);
  }
`

export const FlexResponsive = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: ${({ content }) => (content ? content : 'center')};
  align-items: ${({ dir }) => (dir === 'column' ? 'flex-start' : 'center')};
  text-align: initial;
  gap: ${({ gap }) => (gap ? gap : '20px')};

  @media (min-width: 600px) {
    flex-direction: row;
  }
`
