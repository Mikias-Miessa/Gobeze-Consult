import React from 'react';
import rect11 from '@/public/images/about/Rect11.png';
import rect12 from '@/public/images/about/Rect12.png';
import rect13 from '@/public/images/about/Rect13.png';
import rect14 from '@/public/images/about/Rect14.png';
import rect15 from '@/public/images/about/Rect15.png';
import rect16 from '@/public/images/about/Rect16.png';

const data = [
  {
    id: '1',
    imageSrc: '/images/about/Rect11.png',
    desc: "It's primarily focused on improving your employees' work performance.It's primarily focused on improving your employees' work performance.",
  },
  {
    id: '2',
    imageSrc: '/images/about/Rect12.png',
    desc: "It's primarily focused on improving your employees' work performance.It's primarily focused on improving your employees' work performance.",
  },
  {
    id: '3',
    imageSrc: '/images/about/Rect13.png',
    desc: "It's primarily focused on improving your employees' work performance.It's primarily focused on improving your employees' work performance.",
  },
  {
    id: '4',
    imageSrc: '/images/about/Rect14.png',
    desc: "It's primarily focused on improving your employees' work performance.It's primarily focused on improving your employees' work performance.",
  },
  {
    id: '5',
    imageSrc: '/images/about/Rect15.png',
    desc: "It's primarily focused on improving your employees' work performance.It's primarily focused on improving your employees' work performance.",
  },
  {
    id: '6',
    imageSrc: '/images/about/Rect16.png',
    desc: "It's primarily focused on improving your employees' work performance.It's primarily focused on improving your employees' work performance.",
  },
];

const Training = () => {
  return (
    <div>
      <div
        id='training'
        className='max-w-screen-lg mx-auto flex justify-center items-center flex-wrap'
      >
        {data.map((item) => (
          <div key={item.id} className='w-1/2 md:w-1/3 p-1 md:p-4'>
            <div
              className='bg-cover bg-center h-96 overflow-hidden relative'
              style={{ backgroundImage: `url(${item.imageSrc})` }}
            >
              <div className='absolute bottom-0 left-0 right-0 flex justify-center items-end bg-red-50 bg-opacity-50'>
                <p className='text-center py-5'>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center items-center my-5'>
        <button className='px-8 py-2 text-base font-semibold border-gray-600 border text-center text-black'>
          Read More
        </button>
      </div>
    </div>
  );
};

export default Training;
