import MovieInfo from 'components/movieInfo/MovieInfo';
import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getApi } from 'services/api';
import {  InfoLinks,  AdditionlInfo,
} from '../components/movieInfo/MovieInfo.styled';

const MovieDetails = () => {

  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

const getMovie = `/movie/${params.movieId}`;

    useEffect(() => {
      const getRequest = async () => {
        try {
          const { data } = await getApi(getMovie);
          setMovieInfo(data);
        } catch (error) {
          setError(error.message);
        }
      };
      getRequest();
    }, [getMovie]);

  const location = useLocation()
  const backLink = useRef(location.state?.from ?? '/'); 

  

  
  
 return (
   <div>
     <Link to={backLink.current}>Go Back</Link>
      {
    error !== null && (
      <p>
        Oops, some error occured... Error message: {error}
      </p>)}
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
