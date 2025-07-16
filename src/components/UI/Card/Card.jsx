import { CardStyled, Info } from "./Card.styled.js";

import { useHomeStore } from "../../../store/home";

import CircleProgressbar from "../CircleProgressbar/CircleProgressbar";
import LazyImage from "../LazyImage/LazyImage";
import PosterFallback from "../../../assets/no-poster.png";
import Genres from "../Genres/Genres.jsx";
import { useNavigate } from "react-router-dom";

const Card = ({ item, mediatypeFallback }) => {
  const navigate = useNavigate();
  const { imagesUrl } = useHomeStore((state) => state);
  const {
    id,
    title,
    original_title,
    poster_path,
    genre_ids,
    vote_average,
    media_type,
  } = item;
  let imgSrc = `${imagesUrl.poster}${poster_path}`;

  const handleDetails = (type, id) => {
    navigate(`/details/${type || mediatypeFallback}/${id}`);
  };

  return (
    <CardStyled onClick={() => handleDetails(media_type, id)}>
      <Info>
        <Genres genresArr={genre_ids} />
      </Info>

      {poster_path ? (
        <LazyImage src={imgSrc} alt={title || original_title} />
      ) : (
        <LazyImage src={PosterFallback} alt={title || original_title} />
      )}

      <div
        style={{ position: "absolute", right: "5px", top: "5px", zIndex: "4" }}
      >
        {vote_average && (
          <CircleProgressbar percentage={vote_average} width="50px" />
        )}
      </div>
    </CardStyled>
  );
};
export default Card;
