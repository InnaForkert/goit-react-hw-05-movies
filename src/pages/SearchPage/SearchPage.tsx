import { useState, useEffect } from "react";
import { Movies } from "../../components/Movies/Movies";
import { SearchField } from "../../components/SearchField/SearchField";
import { searchMovies } from "../../util/searchMovies";
import { Heading } from "../Home/Home.styled";

export function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [headingText, setHeadingText] = useState("");

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setSearchResults);
      setTimeout(() => setHeadingText("Nothing found, try again🤔"), 100);
    } else {
      setSearchResults([]);
      setHeadingText("Nothing here yet😥");
    }
  }, [query]);

  function acceptInput(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  }

  return (
    <>
      <SearchField onChange={acceptInput} />
      {searchResults.length > 0 ? (
        <Movies movieList={searchResults} />
      ) : (
        <Heading>{headingText}</Heading>
      )}
    </>
  );
}
