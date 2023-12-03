import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {  getReviews } from 'services/api';

const Reviews = () => {

  const params = useParams();
  const [reviews, setReviews] = useState([]);
  // const getReviews = `/movie/${params.movieId}/reviews`;
  const id = params.movieId;
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getReviews(id);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getRequest();
  }, [id]);


  return reviews.length !== 0 ? (
    <section>
      {error !== null && (
        <p>Oops, some error occured... Error message: {error}</p>
      )}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
}

export default Reviews

