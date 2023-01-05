import "./App.css";
import { Route, Routes } from "react-router";
import { AppBar } from "./components/AppBar/AppBar";
import { Home } from "./pages/Home/Home";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Reviews } from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
