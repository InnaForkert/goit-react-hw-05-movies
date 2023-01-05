import { useParams } from "react-router-dom";
import { fetchDetails } from "../../util/fetchDetails";
import { useEffect, useState } from "react";
import { Details } from "../../interfaces/details";
import { MovieInfo, MoviePoster } from "./MovieDetails.styled";
import { Heading } from "../Home/Home.styled";

export function MovieDetails() {
  const [details, setDetails] = useState({} as Details);
  const { movieId: id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      fetchDetails(id).then(setDetails);
    }
  }, [id]);

  if (!details) {
    return <h1>Sorry, no information about this one!😯</h1>;
  }
  const {
    backdrop_path,
    original_title,
    tagline,
    budget,
    genres,
    overview,
    release_date,
    vote_average,
  } = details;
  const joinedGenres = genres.map((el) => el.name).join(", ");
  return (
    <>
      <Heading>{original_title}</Heading>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={original_title}
      />
      <MovieInfo>
        <h1>{tagline}</h1>
        <p>{joinedGenres}</p>
        <p>Budget: $ {budget}</p>
        <p>Released: {release_date}</p>
        <p>Average vote: {vote_average}</p>
        <p>{overview}</p>
      </MovieInfo>
    </>
  );
}
