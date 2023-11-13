import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getApi } from 'services/api';

const Reviews = () => {

  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const getReviews = `/movie/${params.movieId}/reviews`;

  useEffect(() => {
    const getRequest = async () => {
      try {
        const { data } = await getApi(getReviews);
        setReviews(data.results);
      } catch (error) {
        alert(error.message);
      }
    };
    getRequest();
  }, [getReviews]);


  return reviews.length !== 0 ? (
    <section>
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
