import { Container, HomeStyled } from './Home.styled'

import { Banner, SlidePopular, SlideTrending } from '../../components'

const Home = () => {
  return (
    <HomeStyled>
      <Banner />
      <Container>
        <SlideTrending />
        <SlidePopular />
      </Container>
    </HomeStyled>
  )
}
export default Home
