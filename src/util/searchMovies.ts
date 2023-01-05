import axios from "axios";
const API_KEY = "8522ceac590a3d887052607dd409b490";

export async function searchMovies(query: string) {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const data = await axios.get(URL);
  console.log(data.data.results);
  return data.data.results;
}
