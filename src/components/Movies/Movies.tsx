import { useEffect, useState } from "react";
import { fetchTrending } from "../../util/fetchTrending";

import { Movie } from "../../interfaces/movie";
import { Heading, MovieCard, MovieLibrary, MovieTitle } from "./Movies.styled";
import { nanoid } from "nanoid";

export function Movies() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTrending);
  }, []);
  return (
    <>
      <Heading>Trending Movies This Week</Heading>
      <MovieLibrary>
        {trending.map((el: Movie) => (
          <MovieCard key={nanoid()}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              alt={el.original_title}
            />
            <MovieTitle>{el.original_title}</MovieTitle>
          </MovieCard>
        ))}
      </MovieLibrary>
    </>
  );
}
