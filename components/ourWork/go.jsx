'use client'

// Import necessary libraries and components
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Main component
function Go() {
  const data = [
    {
      id: 1,
      title: 'RECRUITMENT SERVICES',
      description: 'Founded in 1998, The Christopher Group (TCG) has become one of the nation’s largest and most respected boutique Contained Executive HR Search firms and HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment.',
      button: {
        label: 'Read More',
        color: 'gray',
      },
    },
    {
      id: 2,
      title: 'JOB MATCHING SERVICES',
      description: 'Founded in 1998, The Christopher Group (TCG) has become one of the nation’s largest and most respected boutique Contained Executive HR Search firms and HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment.',
      button: {
        label: 'Read More',
        color: 'black',
      },
    },
    {
        id: 3,
        title: 'RECRUITMENT SERVICES',
        description: 'Founded in 1998, The Christopher Group (TCG) has become one of the nation’s largest and most respected boutique Contained Executive HR Search firms and HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment.',
        button: {
          label: 'Read More',
          color: 'gray',
        },
      },
      {
        id: 4,
        title: 'RECRUITMENT SERVICES',
        description: 'Founded in 1998, The Christopher Group (TCG) has become one of the nation’s largest and most respected boutique Contained Executive HR Search firms and HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment.',
        button: {
          label: 'Read More',
          color: 'gray',
        },
      },
  ];

  return (
    <div id='go' className='md:mx-20 mx-4 mb-8 md:mt-12 mt-5'>
      <Splide
        options={{
          autoplay: true,
          type: 'loop',
          interval: 2000,
          perPage: 1,
          pagination: false,
          gap: '',
          arrows: false,
          padding: { right: '20%'   },
        }}
        className="md:pr-20 pr-0"
      >
        {data.map((item) => (
          <SplideSlide key={item.id}>
            <div className={item.id % 2 === 0 ? 'text-black bg-white py-28' : 'bg-black text-white py-28'}>
              <h1 className='text-center font-extrabold mb-3 mt-3 pt-5'>{item.title}</h1>
              <h1 className='text-center text-2xl font-semibold mb-2'>Radically Better Hiring</h1>
              <h3 className='text-center text-sm text-gray-400'>Gobeze Consult is radically improving the hiring process for candidates, recruiters and employers.</h3>
              <div className={item.id % 2 === 0 ? 'md:px-10 px-5 pt-5' : 'md:pl-16 pl-8 px-2 pt-5'}>
                <h1 className={item.id % 2 === 0 ? 'md:font-extrabold font-bold md:text-3xl text-2xl' : 'font-extrabold md:text-3xl text-2xl'}>
                  {item.title}
                </h1>
                <h1 className={item.id % 2 === 0 ? 'md:font-extrabold font-bold md:text-3xl text-2xl' : 'font-extrabold md:text-3xl text-2xl'}>
                  SERVICES
                </h1>
                <h1 className='pt-2 pb-14 font-semibold'>{item.title.toLowerCase()} service</h1>
                <p className=''>{item.description}</p>
                <button className={`border border-${item.button.color} text-${item.button.color} font-bold text-sm px-10 py-3 my-8`}>
                  {item.button.label}
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

// Export the component
export default Go;
