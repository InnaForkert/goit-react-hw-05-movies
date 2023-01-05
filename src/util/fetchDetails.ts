import axios from "axios";

const API_KEY = "8522ceac590a3d887052607dd409b490";

export async function fetchDetails(id: string) {
  const URL = `
  https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const data = await axios.get(URL);
  console.log(data.data);
  return data.data;
}
