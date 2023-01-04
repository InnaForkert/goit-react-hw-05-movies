import axios from "axios";

const API_KEY = "8522ceac590a3d887052607dd409b490";
const URL = `
https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

export async function fetchTrending() {
  const data = await axios.get(URL);
  console.log(data.data.results);
  return data.data.results;
}
