import { Link, useSearchParams, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getSearchedMovies } from '../api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');

  const [movieSearch, setMovieSearch] = useState('');

  const [searchedMovies, setSearchedMovies] = useState([]);
  const movieName = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    const getFilteredMovies = async searchWord => {
      setSearchedMovies(await getSearchedMovies(searchWord));
    };

    if (movieName) {
      console.log('movieName', movieName);
      getFilteredMovies(movieName).catch(console.error);
    }
  }, [movieName]);

  const onChangeInput = e => {
    const inputSearch = e.target.value;
    setMovieSearch(inputSearch);
  };

  const updateQueryString = e => {
    e.preventDefault();
    if (movieSearch) {
      setSearchParams({ query: movieSearch });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main>
      <form onSubmit={updateQueryString}>
        <input
          type="text"
          name="input"
          value={movieSearch}
          onChange={onChangeInput}
        />
        <input type="submit" value="Search" />
      </form>
      <ul>
        {searchedMovies.results &&
          searchedMovies.results.map(searchedMovie => (
            <li key={searchedMovie.id}>
              <Link
                to={'/movies/' + searchedMovie.id}
                state={{ from: location }}
              >
                {searchedMovie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Movies;
