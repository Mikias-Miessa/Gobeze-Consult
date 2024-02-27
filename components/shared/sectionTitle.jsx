import React from 'react'

const SectionTitle = ({title, color}) => {
  return (
    <div className='flex flex-col justify-center items-start pl-20 gap-2'>
          <h1 className={ `font-bold text-2xl md:text-3xl text-${color}`}>{ title}</h1>{' '}
      <div className='h-2 w-20 bg-orange-500'></div>
    </div>
  );
}

export default SectionTitle