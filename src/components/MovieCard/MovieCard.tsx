import { MovieCardStyled, MovieTitle } from "./MovieCard.styled";
import { Movie } from "../../interfaces/movie";

export function MovieCard({
  movie: { original_title, poster_path, id },
}: {
  movie: Movie;
}) {
  return (
    <MovieCardStyled to={`movies/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <MovieTitle>{original_title}</MovieTitle>
    </MovieCardStyled>
  );
}
