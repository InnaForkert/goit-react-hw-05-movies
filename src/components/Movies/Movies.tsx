import { Movie } from "../../interfaces/movie";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieLibrary } from "./Movies.styled";

export function Movies({ movieList }: { movieList: Movie[] }) {
  return (
    <MovieLibrary>
      {movieList.map((el: Movie) => (
        <MovieCard movie={el} key={el.id} />
      ))}
    </MovieLibrary>
  );
}
