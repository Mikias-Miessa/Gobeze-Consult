'use client';
import React from 'react';
import Sidebar from '@/components/shared/admin/sidebar';
import Navbar from '@/components/shared/admin/navbar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row bg-neutral-300 h-screen w-screen'>
      <Sidebar />
      <div className='flex-1 h-screen flex flex-col'>
        <Navbar />
        <div className=' min-h-0 overflow-auto'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
