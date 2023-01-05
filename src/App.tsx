import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { fetchTrending } from "./util/fetchTrending";
import { AppBar } from "./components/AppBar/AppBar";
import { Home } from "./pages/Home/Home";
import { SearchPage } from "./pages/SearchPage/SearchPage";

function App() {
  useEffect(() => {
    fetchTrending().then(console.log);
  }, []);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<SearchPage />}>
          <Route path=":movieId" element={<div>MovieDetails</div>}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
