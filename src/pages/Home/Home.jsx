import { HomeStyled } from "./Home.styled";

import { SlidePopular, SlideTopRated, SlideTrending } from "../../components";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <HomeStyled>
        <SlideTrending />
        <SlidePopular />
        <SlideTopRated />
      </HomeStyled>
    </Layout>
  );
};
export default Home;
