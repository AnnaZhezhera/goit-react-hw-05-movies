import { LayoutBox } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};
