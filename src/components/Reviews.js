import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getReviews } from '../api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const getReviewsByMovieId = async movieId => {
      setReviews(await getReviews(movieId));
    };
    getReviewsByMovieId(id).catch(console.error);
  }, [id]);
  return (
    <section>
      <h2>Reviews</h2>
      {reviews.results?.length > 0
        ? reviews.results.map(({ id, author, content }) => (
            <div key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </div>
          ))
        : 'No reviews was found'}
    </section>
  );
};

export default Reviews;
