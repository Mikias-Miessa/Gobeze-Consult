import React from 'react';
import visionHuman from '@/public/images/about/visHuman.png';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import Image from 'next/image';

const data = [
  {
    id: '1',
    title: 'Present',
    description:
      'Present the job matching services that present the job matching services that.',
    icon: <HiOutlineEmojiHappy />,
  },
  {
    id: '2',
    title: 'Community',
    description:
      'Present the job matching services that present the job matching services that.',
    icon: <FaUsers />,
  },
  {
    id: '3',
    title: 'Community',
    description:
      'Present the job matching services that present the job matching services that.',
    icon: <FaRegStar />,
  },
];

const OurVisionSecond = () => {
  return (
    <div id='visionSecond' className='flex flex-col overflow-x-hidden'>
      <div className='h-fit w-screen bg-black'>
        <div className='h-52'></div>
      </div>

      <div className='flex justify-center items-center -mt-40 mb-10'>
        <Image src={visionHuman} alt='human' width={350} />
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow -ml-12'>
          <div>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
              Present the job matching services that present the job matching.
            </h5>
          </div>
          <p className='mb-3 text-gray-700'>
            Present the job matching services that present the job matching
            services that.
          </p>
          <button className='px-8 py-2 text-sm font-medium text-center text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300'>
            More
          </button>
        </div>
      </div>

      <div className='flex justify-center gap-2'>
        {data.map((items) => (
          <div
            key={items.id}
            className='w-1/5 p-6 text-center flex flex-col items-center'
          >
            <div className='text-center text-5xl'>{items.icon}</div>
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
