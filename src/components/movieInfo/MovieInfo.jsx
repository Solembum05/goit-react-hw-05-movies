import React from 'react'
import { Container, Poster } from './MovieInfo.styled';



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

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const poster = poster_path
  ? `https://image.tmdb.org/t/p/w500${poster_path}`
  : defaultImg;
  
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