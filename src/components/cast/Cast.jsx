import { useEffect, useState } from "react";
import {  getCast } from './../../services/api';
import { useParams } from "react-router-dom";
import { Actor } from "./cast.styled";

const Cast = () => {
  const params = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  // const getCast = `/movie/${params.movieId}/credits`;
  const id = params.movieId
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getCast(id);
        setActors(data.cast);
      } catch (error) {
        setError(error.message);
      }
    };
    getRequest();
  }, [id]);


  return (
    <section>
      {error !== null && (
        <p>Oops, some error occured... Error message: {error}</p>
      )}
      <ul>
        {actors.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <Actor
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast
