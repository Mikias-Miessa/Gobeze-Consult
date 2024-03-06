import React from 'react';
import Image from 'next/image';
import Rectangle2 from '@/public/secondSec/Rectangle2.png';

const data = [
  {
    id: '1',
    title: 'Incubation',
    description: 'This incubation program started a while ago',
  },
  {
    id: '2',
    title: 'Incubation',
    description: 'This incubation program started a while ago',
  },
  {
    id: '3',
    title: 'Incubation',
    description: 'This incubation program started a while ago',
  },
  {
    id: '4',
    title: 'Incubation',
    description: 'This incubation program started a while ago',
  },
];

const Incubation = () => {
  return (
    <div>
        <h1 className='text-center text-2xl font-semibold'>Incubation And Acceleration Programs</h1>
      <div className='flex flex-wrap justify-center'>
        {data.map((item) => (
          <div
            key={item.id}
            className='block max-w-[18rem] bg-black text-white text-surface shadow-secondary-1 m-4'
          >
            <div className='relative overflow-hidden bg-cover bg-no-repeat'>
              <Image className='' src={Rectangle2} alt='' />
            </div>
            <div className='p-4'>
              <p className='text-gray-400'>{item.title}</p>
              <p className='text-base'>{item.description}</p>
              <p className='text-orange-400'>Read this story</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Incubation;
