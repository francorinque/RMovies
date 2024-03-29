import { Container, HomeStyled } from "./Home.styled"

import {
  Banner,
  SlidePopular,
  SlideTopRated,
  SlideTrending,
} from "../../components"

const Home = () => {
  return (
    <HomeStyled>
      <Banner />
      <Container>
        <SlideTrending />
        <SlidePopular />
        <SlideTopRated />
      </Container>
    </HomeStyled>
  )
}
export default Home
