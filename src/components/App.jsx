import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { AppWrapp } from './App.styled';

// USER_KEY bf5cf1e2c182dc5f850732c19ce27d26
export const App = () => {
  return (
    <AppWrapp>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </AppWrapp>
  );
};
