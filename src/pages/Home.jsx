import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from '../api';

const Home = ({ onMovieClick }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setTrendingMovies(await fetchMovies());
    };
    fetchTrendingMovies().catch(console.error);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.original_title}>
            <Link to={'/movies/' + movie.id} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
