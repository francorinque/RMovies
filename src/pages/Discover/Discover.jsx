import { DiscoverStyled } from "./Discover.styled.js";

import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { Card, Loader } from "../../components/UI";
import { useDiscover } from "../../hooks/useDiscover.js";
import Layout from "../../components/Layout/Layout.jsx";

const Discover = () => {
  const { mediatype } = useParams();
  const { data, loading } = useDiscover(mediatype);

  return (
    <Layout>
      <DiscoverStyled>
        {data?.map((item) => {
          return (
            <Card item={item} key={uuid()} mediatypeFallback={mediatype} />
          );
        })}
      </DiscoverStyled>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {loading && <Loader />}
      </div>
    </Layout>
  );
};
export default Discover;
