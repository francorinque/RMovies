import { Wrapper, WrapperInner, WrapperLoader } from "./Details.styled.js";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Info from "./Info/Info.jsx";
import Videos from "./Videos/Videos.jsx";
import Cast from "./Cast/Cast.jsx";
import OverlayVideo from "../../components/OverlayVideo/OverlayVideo.jsx";
import Loader from "../../components/UI/Loader/Loader.jsx";

const Details = () => {
  const { mediatype, id } = useParams();
  const { loading: loadingDetails, data: dataDetails } = useFetch(
    `/${mediatype}/${id}`,
  );
  const { loading: loadingVideos, data: dataVideos } = useFetch(
    `/${mediatype}/${id}/videos`,
  );

  if (loadingDetails) {
    return (
      <WrapperLoader>
        <Loader />
      </WrapperLoader>
    );
  }

  return (
    !loadingDetails && (
      <>
        <OverlayVideo />
        <Wrapper>
          <Info data={dataDetails} dataVideos={dataVideos} />
          {!loadingDetails && (
            <WrapperInner>
              <Cast />
              <Videos dataVideos={dataVideos?.results} />
            </WrapperInner>
          )}
        </Wrapper>
      </>
    )
  );
};
export default Details;
