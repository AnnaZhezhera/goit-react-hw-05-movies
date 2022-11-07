import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from './Layout/Layout';
import { AppWrapp } from './App.styled';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
// import { api } from '../api';

// USER_KEY bf5cf1e2c182dc5f850732c19ce27d26
export const App = () => {
  return (
    <AppWrapp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="home" element={<div>Home1</div>}></Route> */}
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </AppWrapp>
  );
};
