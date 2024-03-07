'use client';
import React from 'react';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className='bg-white px-4 py-2  border-b'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <a href='#' className=' text-lg font-bold'>
            <Image
              src='/images/orangelogo.png'
              width={140}
              height={10}
              alt='logo'
            />
          </a>
        </div>
        <div className='flex'>
          <a href='#' className='text-gray-800 mx-4'>
            user
          </a>
          <a href='#' className='text-gray-800 mx-4'>
            profile
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
