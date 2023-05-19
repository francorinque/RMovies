import { HomeStyled, Container } from './Home.styled'

import { Banner, SlidePopular, SlideTrending } from '../../components'

const Home = () => {
  return (
    <HomeStyled>
      <Banner />
      <Container>
        <SlideTrending title='Trending Movies' mediaType='movie' />
        <SlidePopular title='Top Movies' mediaType='movie' />
        <SlideTrending title='Trending Tv Shows' mediaType='tv' />
        <SlidePopular title='Top Tv Shows' mediaType='tv' />
      </Container>
    </HomeStyled>
  )
}
export default Home
