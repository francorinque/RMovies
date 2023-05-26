import styled from 'styled-components'

export const InfoBanner = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: url(${({ image }) => image}) no-repeat center center/cover;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: var(--gradient-overlay);
  }
`

export const BannerContent = styled.div`
  width: 100%;
  max-width: var(--max-w);
  margin-inline: auto;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 2;
  padding: var(--h-header) 20px;
  @media (min-width: 600px) {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const BannerPoster = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: var(--radius);
  margin: 0 auto;

  img {
    border-radius: var(--radius);
  }
`

export const BannerTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`

export const BannerTagline = styled.span`
  color: var(--color-text-light);
  font-size: 20px;
`

export const Flex = styled.div`
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
