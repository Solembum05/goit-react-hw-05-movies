import MovieList from 'components/movieList/MovieList';
import { SearchBox } from 'components/searchBox/SearchBox'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getApi } from 'services/api';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  
  const movie = searchParams.get('query') ?? '';

  const onSubmit = e => {
    e.preventDefault();
    const formSearch = e.target.children.search.value

    setSearchParams({
      query: formSearch,
    });
}

const getMovie = `search/movie`;

  useEffect(() => {
    const getRequest = async search => {
      if (search === '') {
        return;
      }
      try {
        const { data } = await getApi(getMovie, search);

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getRequest(movie);
  }, [getMovie, movie]);
  
  return (
    <main>
      {error !== null && (
        <p>Oops, some error occured... Error message: {error}</p>
      )}
      <SearchBox onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </main>
  );
}

export default Movies

