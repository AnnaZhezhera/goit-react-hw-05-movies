import { useParams } from 'react-router-dom';
import React, { useSearchParams, useEffect } from 'react';
import { getSearchedMovie } from '../api';

const Movies = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getFilteredMovieById = async movieId => {
      setSearchParams(await getSearchedMovie(movieId));
    };
    getFilteredMovieById(id).catch(console.error);
  }, [id]);
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
