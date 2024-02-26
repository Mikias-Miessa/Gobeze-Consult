import NavBar from '@/components/shared/NavBar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
