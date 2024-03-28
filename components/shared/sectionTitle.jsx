import React from 'react';

const SectionTitle = ({ title, color }) => {
  return (
    <div className='flex flex-col justify-center items-start  gap-2'>
      <h1 className={`font-bold text-2xl md:text-3xl text-${color} bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-transparent bg-clip-text`}>
        {title}
      </h1>{' '}
      <div className='h-2 w-20 bg-orange-500'></div>
    </div>
  );
};

export default SectionTitle;
