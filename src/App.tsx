import "./App.css";
import { Route, Routes } from "react-router";
import { AppBar } from "./components/AppBar/AppBar";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./pages/Cast/Cast"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<SearchPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
