import { useEffect, useState } from "react";
import { fetchCast } from "../../util/fetchCast";
import { useParams } from "react-router-dom";
import { NoReviews } from "../Reviews/Reviews.styled";
import { CastType } from "../../interfaces/cast";
import { Actor } from "../../components/Actor/Actor";
import { CastStyled } from "./Cast.styled";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId) {
      fetchCast(movieId).then(setCast);
    }
  }, [movieId]);
  return (
    <CastStyled>
      {cast.length > 0 ? (
        cast.map((el: CastType) => <Actor data={el} key={el.id} />)
      ) : (
        <NoReviews>ERROR 404 Cast not found 👽</NoReviews>
      )}
    </CastStyled>
  );
}
