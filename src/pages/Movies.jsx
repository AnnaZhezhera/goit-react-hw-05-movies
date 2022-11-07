import { useParams, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getSearchedMovie } from '../api';

const Movies = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('name') ?? '';
  console.log(movieName);
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
