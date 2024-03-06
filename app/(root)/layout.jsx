import Footer from '@/components/shared/Footer';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
