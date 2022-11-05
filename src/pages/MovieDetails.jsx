import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getMovie } from '../api';

const MovieDetails = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    const getMovieById = async movieId => {
      setCurrentMovie(await getMovie(movieId));
    };
    getMovieById(id).catch(console.error);
  }, [id]);

  return (
    <main>
      <div className="movie-card">
        <div className="movie-card__image-wrapp">
          <img
            className="movie-card__image"
            src={currentMovie.backdrop_path}
            alt="pic"
          />
        </div>
        <div className="movie-card__content">{currentMovie.overview}</div>
      </div>
    </main>
  );
};

export default MovieDetails;
