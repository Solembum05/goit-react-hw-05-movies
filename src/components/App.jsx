import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './../pages/HomePage';
import Movies from './../pages/Movies';
import MovieDetails from './../pages/MovieDetails';
import Layout from './layout/Layout';

export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

  );


};
