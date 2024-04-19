import React from 'react';
import Image from 'next/image';
import Startupimg from '@/public/images/community/startup.png';

function Startup() {
  return (
    <div className='bg-black'>
      <div className='px-10 md:py-0 py-10 max-w-screen-lg mx-auto'>
        <div className='flex items-center gap-5'>
          <div className='md:w-1/2 w-full'>
            <h1 className='text-gray-200 font-light text-3xl'>
              {' '}
              <span className='font-bold text-gray-50 text-6xl'>F</span>rom
              formulating policy insights to actively engaging with the
              community and influencing the trajectory of the next generation of
              Ethiopian businesses, we are an active member of the startup eco
              system in Ethiopia.
            </h1>
            <button className='border border-white font-bold text-sm px-10 py-3 text-white mt-10'>
              Learn More
            </button>
          </div>
          <div className='w-1/2 hidden md:block'>
            <Image src={Startupimg} alt='start up' className='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startup;
