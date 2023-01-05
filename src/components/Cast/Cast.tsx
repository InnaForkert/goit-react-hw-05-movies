import { useEffect, useState } from "react";
import { fetchCast } from "../../util/fetchCast";
import { useLocation } from "react-router-dom";
import { NoReviews } from "../Reviews/Reviews.styled";
import { CastType } from "../../interfaces/cast";
import { Actor } from "../Actor/Actor";
import { CastStyled } from "./Cast.styled";

export function Cast() {
  const {
    state: { id },
  } = useLocation();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(id).then(setCast);
  }, [id]);
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
