import React from 'react'
import { AdditionlInfo, Container, InfoLinks, Poster } from './MovieInfo.styled';
import { Outlet } from 'react-router-dom';


const MovieInfo = ({ movieInfo }) => {
  
  const {
    poster_path,
    title,
    name,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieInfo;
  
const poster = poster_path
  ? `https://image.tmdb.org/t/p/w500${poster_path}`
  : 'Poster not found';
  
  const genresList = genres.map(genr=>genr.name).join(' ')


  return (
    <div>
      <Container>
        <div>
          <Poster alt="poster" src={poster} />
        </div>
        <div>
          <h2>
            {title || name} ({release_date?.slice(0, 4)})
          </h2>
          <p>User Score: {vote_average.toFixed(2)}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresList}</p>
        </div>

      </Container>
    </div>
  );
}

export default MovieInfo