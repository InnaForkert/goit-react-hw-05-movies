import { useState, useEffect } from "react";
import { Movies } from "../../components/Movies/Movies";
import { fetchTrending } from "../../util/fetchTrending";
import { Heading } from "./Home.styled";

export function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTrending);
  }, []);
  return (
    <>
      <Heading>Trending Movies This Week</Heading>
      <Movies movieList={trending} />
    </>
  );
}
