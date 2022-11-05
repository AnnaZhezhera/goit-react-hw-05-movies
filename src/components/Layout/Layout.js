import { LayoutBox } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Outlet />
    </LayoutBox>
  );
};
