import React from 'react';
import visionHuman from '@/public/images/about/visionHuman1.png';
import { FaRegBuilding } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';
import { GiFallingStar } from "react-icons/gi";
import Image from 'next/image';

const data = [
  {
    id: '1',
    title: 'Enterprises',
    description:
      'To make a dent on the prevailing business culture in Ethiopia and enable people of Ethiopian origin to find personal and business success on a global scale.',
    icon: <FaRegBuilding />,
  },
  {
    id: '2',
    title: 'Youngsters',
    description:
      'To establish a conducive atmosphere in which kids can be motivated, educated about societal customs and traditions, and reminded of the genuine principles of humanity.',
    icon: (
      <div className='border-black border-y-2'>
        <FaUsers />
      </div>
    ),
  },
  {
    id: '3',
    title: 'Community',
    description:
      'Create a global business culture that reflects best of old-world values. A business culture that places a premium on people, family and community more than profits.',
    icon: <GiFallingStar />,
  },
];

const OurVisionSecond = () => {
  return (
    <div id='visionSecond' className='flex flex-col overflow-x-hidden'>
      <div className='h-fit w-screen bg-black'>
        <div className='h-52'></div>
      </div>

      <div className='flex justify-center items-center -mt-40 mb-10'>
        <Image
          src={visionHuman}
          alt='human'
          width={350}
          className='hidden md:block'
        />
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow md:-ml-12'>
          <div>
            <h1 className='text-5xl font-bold text-center bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-transparent bg-clip-text mb-4'>
              Our Vision
            </h1>
          </div>
          <p className='mb-3 text-gray-700'>
            Present the job matching services that present the job matching
            services that.
          </p>
          <button className='px-8 py-2 text-base font-semibold border-black border text-center text-black'>
            Read More
          </button>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-2'>
        {data.map((items) => (
          <div
            key={items.id}
            className='md:w-1/5 md:p-6 md:px-0 px-10 md:py-5 pb-10 p-2 text-center flex flex-col items-center'
          >
            <div className='text-center mb-3'>
              <div className='bg-gray-300 rounded-full p-4'>
                <div className='text-5xl'>{items.icon}</div>
              </div>
            </div>
            {/* <div className='text-center text-5xl'>{items.icon}</div> */}
            <div>
              <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                {items.title}
              </h5>
            </div>
            <p className='mb-3 text-sm text-gray-700'>{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVisionSecond;
