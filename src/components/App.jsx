import { lazy} from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import('./../pages/HomePage'));
const Movies = lazy(() => import('./../pages/Movies'));
const MovieDetails = lazy(() => import('./../pages/MovieDetails'));
const Layout = lazy(() => import('./layout/Layout'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );


};
