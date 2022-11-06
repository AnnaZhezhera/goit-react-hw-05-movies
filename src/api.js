import axios from 'axios';

export const imageBaseUrl = 'https://image.tmdb.org/t/p/';

export const fetchMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=bf5cf1e2c182dc5f850732c19ce27d26'
  );
  console.log(response.data.results);
  return response.data.results;
};

export const getMovie = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=bf5cf1e2c182dc5f850732c19ce27d26`
  );

  console.log(response.data);
  return response.data;
};

export const getCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bf5cf1e2c182dc5f850732c19ce27d26`
  );
  console.log('credits', response.data);
  return response.data;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=bf5cf1e2c182dc5f850732c19ce27d26`
  );
  console.log('reviews', response.data);
  return response.data;
};

export const getSearchedMovie = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=bf5cf1e2c182dc5f850732c19ce27d26`
  );
  console.log('search', response.data);
  return response.data;
};
