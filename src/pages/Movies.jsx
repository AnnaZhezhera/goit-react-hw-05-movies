import { Link, useSearchParams, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getSearchedMovies } from '../api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const movieName = searchParams.get('query') ?? '';

  const [searchQuery, setSearchQuery] = useState('');

  const [searchedMovies, setSearchedMovies] = useState([]);

  const location = useLocation();

  //   const [error, setError] = useState(null);

  useEffect(() => {
    const getFilteredMovies = async searchWord => {
      setSearchedMovies(await getSearchedMovies(searchWord));
    };

    if (movieName) {
      getFilteredMovies(movieName).catch(console.error);
    }
  }, [movieName]);

  useEffect(() => {
    if (movieName) {
      setSearchQuery(movieName);
    }
  }, [movieName]);

  const onChangeInput = e => {
    const inputSearch = e.target.value;
    setSearchQuery(inputSearch);
  };

  const updateQueryString = e => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ query: searchQuery });
    } else {
      setSearchParams();
      alert('The input is empty. Please choose a film. ');
    }
  };

  return (
    <main>
      <form onSubmit={updateQueryString}>
        <input
          type="text"
          name="input"
          value={searchQuery}
          onChange={onChangeInput}
        />
        <input type="submit" value="Search" />
      </form>
      {searchedMovies.results && searchedMovies.results.length === 0 && (
        <p>Nothing was found</p>
      )}
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
