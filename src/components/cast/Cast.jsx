import { useEffect, useState } from "react";
import { getApi } from './../../services/api';
import { useParams } from "react-router-dom";
import { Actor } from "./cast.styled";

const Cast = () => {
  const params = useParams();
  const [actors, setActors] = useState([]);
  const getCast = `/movie/${params.movieId}/credits`;

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getApi(getCast);
        setActors(data.cast);
      } catch (error) {
        alert(error.message);
      }
    };
    getRequest();
  }, [getCast]);


  return (
    <section>
      <ul>
        {actors.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <Actor
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'Poster not found'
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
