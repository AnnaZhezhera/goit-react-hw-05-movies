import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import React, { Suspense, useState, useEffect } from 'react';
import { getMovie, imageBaseUrl } from '../api';

const MovieDetails = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const getMovieById = async movieId => {
      setCurrentMovie(await getMovie(movieId));
    };
    getMovieById(id).catch(console.error);
  }, [id]);

  return (
    currentMovie.id && (
      <main>
        <Link to={backLinkHref}>Back to products</Link>
        <div className="movie-card">
          <div className="movie-card__image-wrapp">
            <img
              className="movie-card__image"
              src={imageBaseUrl.concat('w500/', currentMovie.poster_path)}
              alt={currentMovie.original_title}
            />
          </div>
          <div className="movie-card__content">
            <h2>{currentMovie.original_title}</h2>
            <p>User Score: {Math.round(currentMovie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p> {currentMovie.overview}</p>
            <h3>Genres</h3>
            <p>{currentMovie.genres.map(genre => `${genre.name + ' '}`)}</p>
          </div>
        </div>
        <div>
          <p>Additional Information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </main>
    )
  );
};

export default MovieDetails;
