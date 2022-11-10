import axios from 'axios';

export const imageBaseUrl = 'https://image.tmdb.org/t/p/';

export const fetchMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=bf5cf1e2c182dc5f850732c19ce27d26'
  );
  return response.data.results;
};

export const getMovie = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=bf5cf1e2c182dc5f850732c19ce27d26`
  );

  return response.data;
};

export const getCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bf5cf1e2c182dc5f850732c19ce27d26`
  );

  return response.data;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=bf5cf1e2c182dc5f850732c19ce27d26`
  );

  return response.data;
};

export const getSearchedMovies = async searchWord => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchWord}&api_key=bf5cf1e2c182dc5f850732c19ce27d26`
  );

  return response.data;
};
