'use client';

import React from 'react'
import Image from 'next/image';
import Featureppl from '@/public/images/feappl.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Go() {
  return (
      <div id='go' className='md:mx-32 mx-4 mb-8 md:mt-12 mt-5'>


        <div className=''>
            <Splide
              options={{
                autoplay: true,
                type: 'loop',
                interval: 2000,
                perPage: 1,
                pagination: false,
                gap: '',
                arrows: false,
                padding: { right: '20%' }
              }}
            >
                  <SplideSlide>
                  <div id='gowork' className='md:mx- mx-4 mb-8 mt-12'>
                    <div className='bg-black text-white'>
                    <h1 className='text-center font-extrabold mb-3 mt-3 pt-5'>Recruitment</h1>
                    <h1 className='text-center text-2xl font-semibold mb-2'>Radically Better Hiring</h1>
                    <h3 className='text-center text-sm text-gray-400'>Gobeze Consult is radically improving the hiring process for candidates, recruiters and employers.</h3>
                    <div className='px-10 pt-5'>
                    <h1 className='font-extrabold md:text-3xl text-2xl'>RECRUITMENT</h1>
                    <h1 className='font-extrabold md:text-3xl text-2xl'>SERVICES</h1>
                    <h1 className='pt-2 pb-14 font-semibold'>Recruitment service</h1>
                    <p className="text-gray-400">Founded in 1998, The Christopher Group (TCG) has become one of the nation’s
                        largest and most respected boutique Contained Executive HR Search firms and
                        HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment. </p>
                    <button className='border border-gray-300 text-gray-300 font-bold text-sm px-10 py-3 my-8 mb-10'>Read More</button>
                    </div>
                    </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    
                  <div id='gosiltena' className='md:mx- mx-4 mb-8 mt-12'>
                    <div className='text-black bg-white'>
                    <h1 className='text-center font-extrabold mb-3 mt-3 pt-5'>Recruitment</h1>
                    <h1 className='text-center text-2xl font-semibold mb-2'>Radically Better Hiring</h1>
                    <h3 className='text-center text-sm text-gray-400'>Gobeze Consult is radically improving the hiring process for candidates, recruiters and employers.</h3>
                    <div className='px-10 pt-5'>
                    <h1 className='md:font-extrabold font-bold pt-5 md:text-3xl text-2xl'>JOB MATCHING</h1>
                    <h1 className='md:font-extrabold font-bold md:text-3xl text-2xl'>SERVICES</h1>
                    <h1 className='pt-2 pb-14 font-semibold'>Job Matching services</h1>
                    <p className="">Founded in 1998, The Christopher Group (TCG) has become one of the nation’s
                        largest and most respected boutique Contained Executive HR Search firms and
                        HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment. </p>
                    <button className='border border-black text-black font-bold text-sm px-10 py-3 my-8'>Read More</button>
                    </div>
                    </div>
                    </div>
                  </SplideSlide>
            </Splide>
          </div>
        
        </div>
  )
}

export default Go;

