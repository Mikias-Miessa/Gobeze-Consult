import React from 'react';

const data = [
  {
    id: '1',
    imageSrc: '/images/about/training/Rectangle51.png',
    desc: 'Full Stack development for girls',
  },
  {
    id: '2',
    imageSrc: '/images/about/training/Rectangle52.png',
    desc: 'Graphic design',
  },
  {
    id: '3',
    imageSrc: '/images/about/training/Rectangle53.png',
    desc: 'ACCA Examination',
  },
  {
    id: '4',
    imageSrc: '/images/about/training/Rectangle54.png',
    desc: 'Digital Marketing',
  },
  {
    id: '5',
    imageSrc: '/images/about/training/Rectangle55.png',
    desc: 'Tech Entrepreneurship.',
  },
  {
    id: '6',
    imageSrc: '/images/about/training/Rectangle56.png',
    desc: 'Digital Marketing',
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
              className='bg-cover bg-center h-72 md:h-96 overflow-hidden relative w-full'
              style={{
                backgroundImage: `url(${item.imageSrc})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat' 
              }}
            >
              <div className='absolute bottom-0 left-0 right-0 flex justify-center items-end bg-black bg-opacity-50'>
                <p className='text-center py-5 text-white font-bold'>
                  {item.desc}
                </p>
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
