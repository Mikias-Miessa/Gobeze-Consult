import React from 'react';
import Link from 'next/link';

const notFound = () => {
  return (
    <div
      className='bg-cover bg-center w-full overflow-hidden'
      style={{
        backgroundImage: `url("/images/404/404_page.png")`,
      }}
    >
      <div className='min-h-screen flex flex-grow items-center justify-center'>
        <div className='p-8 text-center max-w-md'>
          <h1 className='mb-3 text-9xl font-extrabold'>
            <span className='drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-orange-500'>
              404
            </span>
          </h1>
          <p className='font-bold text-5xl'>PAGE NOT FOUND</p>
          <p className='mt-4'>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <div className='mt-5 w-40 mx-auto'>
            <div className='border-inline border-2'>
              <Link href='/'>
                <p className='border p-2'>Home Page</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;
