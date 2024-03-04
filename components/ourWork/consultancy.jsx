import React from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const data = [
  {
    id: '1',
    title: 'Primarily',
    description:
      "It's primarily focused on improving your employees' work performance. It's primarily focused on improving your employees' work performance. ",
    icon: <HiOutlineEmojiHappy />,
  },
  {
    id: '2',
    title: 'Primarily',
    description:
      "It's primarily focused on improving your employees' work performance. It's primarily focused on improving your employees' work performance.",
    icon: <FaUsers />,
  },
  {
    id: '3',
    title: 'Primarily',
    description:
      "It's primarily focused on improving your employees' work performance. It's primarily focused on improving your employees' work performance.",
    icon: <FaRegStar />,
  },
];

const Consultancy = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute left-0 top-0 h-full bg-black w-5/12 hidden md:block'></div>
      <div className='flex md:flex-row flex-col justify-center items-center gap-x-28 p-10 md:p-20 md:ml-28'>
        <div className='w-full md:w-1/2 md:flex items-center gap-5 z-40 my-5'>
          <div className='w-full md:w-1/2'>
            <div className='p-6 text-center border-orange-300 border flex flex-col items-center bg-slate-50 mb-5 justify-center h-72'>
              <div className='text-center text-5xl mb-3'>
                <HiOutlineEmojiHappy />
              </div>
              <div className='mb-3'>
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                  Primarily
                </h5>
              </div>
              <p className='mb-3 text-sm text-gray-700'>
                It's primarily focused on improving your employees' work
                performance. It's primarily focused on improving your employees'
                work performance.
              </p>
            </div>

            <div className='p-6 border-orange-300 border text-center flex flex-col items-center bg-slate-50 mb-5 justify-center  h-72'>
              <div className='text-center text-5xl mb-3'>
                <HiOutlineEmojiHappy />
              </div>
              <div className='mb-3'>
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                  Primarily
                </h5>
              </div>
              <p className='mb-3 text-sm text-gray-700'>
                It's primarily focused on improving your employees' work
                performance. It's primarily focused on improving your employees'
                work performance.
              </p>
            </div>
          </div>

          <div className='w-full md:w-1/2'>
            <div className='p-6 border-orange-300 border text-center flex flex-col items-center bg-slate-50 h-72'>
              <div className='text-center text-5xl'>
                <HiOutlineEmojiHappy />
              </div>
              <div>
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                  Primarily
                </h5>
              </div>
              <p className='mb-3 text-sm text-gray-700'>
                It's primarily focused on improving your employees' work
                performance. It's primarily focused on improving your employees'
                work performance.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <h1 className='text-center font-bold text-6xl'>Consultancy</h1>
          <p className='my-5'>
            It's primarily focused on improving your employees' work
            performance. It's primarily focused on improving your employees'
            work performance.
          </p>
          <p>
            It's primarily focused on improving your employees' work
            performance. It's primarily focused on improving your employees'
            work performance. It's primarily focused on improving your
            employees' work performance. It's primarily focused on improving
            your employees' work performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
