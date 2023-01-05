import { nanoid } from "nanoid";
import { MovieCardStyled, MovieTitle } from "./MovieCard.styled";
import { Movie } from "../../interfaces/movie";
import { Link } from "react-router-dom";

export function MovieCard({
  movie: { original_title, poster_path },
}: {
  movie: Movie;
}) {
  return (
    <MovieCardStyled to={original_title}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <MovieTitle>{original_title}</MovieTitle>
    </MovieCardStyled>
  );
}
