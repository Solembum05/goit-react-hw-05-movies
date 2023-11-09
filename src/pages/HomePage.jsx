import React, { useEffect, useState } from 'react'
import { getApi } from 'services/api';
import MovieList from './../components/movieList/MovieList';

const getTrending = 'trending/all/day';

const HomePage = () => {
  const [movies, setMovies] = useState([])
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [query, setQuery] = useState('')

useEffect(() => {
  const getRequest = async () => {
    try {
      const { data } = await getApi(getTrending);

      setMovies(data.results);
    } catch (error) {
      alert(error.message);
    }
  };
  getRequest();
}, []);
  
  
  return (

    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies}/>
    </div>
  )
}


export default HomePage