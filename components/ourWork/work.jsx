import React from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const data = [
  {
    id: '1',
    title: 'Primarily',
    description:
      'Present the job matching services that present the job matching services that.',
    icon: <HiOutlineEmojiHappy />,
  },
  {
    id: '2',
    title: 'Primarily',
    description:
      'Present the job matching services that present the job matching services that.',
    icon: <FaUsers />,
  },
  {
    id: '3',
    title: 'Primarily',
    description:
      'Present the job matching services that present the job matching services that.',
    icon: <FaRegStar />,
  },
];

const Work = () => {
  return (
    <div
      id='work'
      className='bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center w-full overflow-hidden'
      style={{ backgroundImage: `url("/images/work/Why.png")` }}
    >
      <div className='max-w-screen-lg mx-auto px-5'>
        <div className='md:text-8xl text-xl font-semibold text-orange-500 pb-10 md:pb-28'>
          <h1>Why We Do It?</h1>
        </div>

        <div>
          <div className='flex flex-col md:flex-row md:gap-20'>
            {data.map((items) => (
              <div
                key={items.id}
                className='w-full md:w-1/3 p-6 text-center flex flex-col items-center bg-neutral-400 bg-opacity-50 mb-8 md:mb-0'
              >
                <div className='flex justify-between items-center w-full mb-2'>
                  <div className=''>
                    <h5 className='text-xl font-bold tracking-tight'>
                      {items.title}
                    </h5>
                  </div>
                  <div className='text-center text-orange-500 text-3xl'>
                    {items.icon}
                  </div>
                </div>
                <p className='mb-3 text-base text-start text-gray-700'>
                  {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
