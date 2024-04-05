'use client';
import React from 'react';
import { AuthProvider } from './Provider';
import TheLayout from './theLayout';

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <TheLayout children={children} />
    </AuthProvider>
  );
};

export default Layout;
