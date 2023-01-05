import { MovieCardStyled, MovieTitle } from "./MovieCard.styled";
import { Movie } from "../../interfaces/movie";
import { useLocation } from "react-router";

export function MovieCard({
  movie: { original_title, poster_path, id },
}: {
  movie: Movie;
}) {
  const { pathname } = useLocation();
  if (pathname === "/") {
    id = `/movies/${id}`;
  }
  return (
    <MovieCardStyled to={`${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <MovieTitle>{original_title}</MovieTitle>
    </MovieCardStyled>
  );
}
