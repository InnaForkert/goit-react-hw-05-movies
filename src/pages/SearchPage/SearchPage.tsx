import { useState, useEffect } from "react";
import { Movies } from "../../components/Movies/Movies";
import { SearchField } from "../../components/SearchField/SearchField";
import { searchMovies } from "../../util/searchMovies";
import { Heading } from "../Home/Home.styled";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [headingText, setHeadingText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";

  useEffect(() => {
    if (filter) {
      searchMovies(filter).then(setSearchResults);
      setTimeout(() => setHeadingText("Nothing found, try again🤔"), 100);
    } else {
      setSearchResults([]);
      setHeadingText("Nothing here yet😥");
    }
  }, [filter]);

  function acceptInput(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    setSearchParams(target.value ? { filter: target.value } : {});
  }

  return (
    <>
      <SearchField onChange={acceptInput} value={filter} />
      {searchResults.length > 0 ? (
        <Movies movieList={searchResults} />
      ) : (
        <Heading>{headingText}</Heading>
      )}
    </>
  );
}
