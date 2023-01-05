import { Movie } from "../../interfaces/movie";
import { MovieCard, MovieLibrary, MovieTitle } from "./Movies.styled";
import { nanoid } from "nanoid";

export function Movies({ movieList }: { movieList: Movie[] }) {
  return (
    <MovieLibrary>
      {movieList.map((el: Movie) => (
        <MovieCard key={nanoid()}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
            alt={el.original_title}
          />
          <MovieTitle>{el.original_title}</MovieTitle>
        </MovieCard>
      ))}
    </MovieLibrary>
  );
}
