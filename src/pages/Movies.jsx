import { useParams, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getSearchedMovie, getMovie } from '../api';

const Movies = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('name') ?? '';

  // const visibleMovies =

  useEffect(() => {
    const getFilteredMovieById = async movieId => {
      setSearchParams(await getSearchedMovie(movieId));
    };
    getFilteredMovieById(id).catch(console.error);
  }, [id, setSearchParams]);
  return (
    <main>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default Movies;
