import MovieInfo from 'components/movieInfo/MovieInfo';
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { getApi } from 'services/api';
import {  InfoLinks,  AdditionlInfo,
} from '../components/movieInfo/MovieInfo.styled';

const MovieDetails = () => {

const [movieInfo, setMovieInfo] = useState(null);
  const params = useParams();

const getMovie = `/movie/${params.movieId}`;

    useEffect(() => {
      const getRequest = async () => {
        try {
          const { data } = await getApi(getMovie);
          setMovieInfo(data);
        } catch (error) {
          alert(error.message);
        }
      };
      getRequest();
    }, [getMovie]);

 return (
    <div>
      <button>Go Back</button>
      {movieInfo && <MovieInfo movieInfo={movieInfo} />}
      <AdditionlInfo>
        Additionl Information
        <ul>
          <InfoLinks to="cast">Cast</InfoLinks>
          <InfoLinks to="reviews">Reviews</InfoLinks>
        </ul>
      </AdditionlInfo>
      <Outlet />
    </div>
  );
}

export default MovieDetails
