import React from 'react';
import Image from 'next/image';
import aboutImg from '@/public/images/about/aboutS.png';

const AboutSecond = () => {
  return (
    <div className='md:flex items-center max-w-screen-lg mx-auto gap-14 overflow-hidden p-10  h-screen'>
      <div className='md:w-1/2'>
        <Image src={aboutImg} alt='aster' className='h-[25rem]' />
      </div>
      <div className='md:w-1/2'>
        <div className='mb-5'>
          <h1 className='text-5xl md:text-8xl font-bold text-center md:text-start bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 inline-block text-transparent bg-clip-text'>
            About US
          </h1>
        </div>
        <div className='text-2xl text-gray-400'>
          <span className='text-5xl'>G</span>obeze Consult, which was
          established in 2017, will commemorate its sixth year anniversary on
          March 8th, the day it formally began operations. Any business needs to
          have meaning and purpose, and ours is essentially based on a profound
          philosophy that satisfies both.
        </div>
      </div>
    </div>
  );
};

export default AboutSecond;
