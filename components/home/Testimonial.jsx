'use client';
import React from 'react';
import Image from 'next/image';
import Rectangle1 from '@/public/testimonial/Rect1.png';
import Rectangle2 from '@/public/testimonial/Rect2.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SectionTitle from '../shared/sectionTitle';
import { FaQuoteRight } from 'react-icons/fa';
import {getAllTests,selectAllTests,selectLoading} from '@/store/testSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// const test = [
//   {
//     id: '1',
//     name: 'Jane Eyre',
//     title: 'What is the format of a testimonial?',
//     description:
//       "Keep it short and conversational. Your testimonial should only be two or three paragraphs, at most. They should be written in your customer's tone so that your testimonial doesn't seem overly formal or technical.",
//     job: 'Digital Marketer',
//     imageSrc: Rectangle1,
//   },
//   {
//     id: '2',
//     name: 'Jane Eyre',
//     title: 'What is the format of a testimonial?',
//     description:
//       "Keep it short and conversational. Your testimonial should only be two or three paragraphs, at most. They should be written in your customer's tone so that your testimonial doesn't seem overly formal or technical.",
//     job: 'Digital Marketer',
//     imageSrc: Rectangle2,
//   },
// ];

const Testimonial = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTests());
  }, []);
  const tests = useSelector(selectAllTests);
  const loading = useSelector(selectLoading);

  return (
    <div className='max-w-screen-lg mx-auto mt-10'>
      <div className='ml-20'>
        <SectionTitle color={'black'} title={'TESTIMONIALS'} />
      </div>

      <div className='-mt-20'>
        <Splide
          options={{
            autoplay: true,
            type: 'loop',
            interval: 4000,
            perPage: 1,
            padding: { left: 30, right: 30 },
            pagination: false,
            gap: '',
          }}
        >
          {tests.length > 0 &&
            tests.map(
              (tes) =>
                tes && (
                  <SplideSlide key={tes.id}>
                    <div className='container my-24 mx-auto md:flex md:items-center md:justify-between md:px-6'>
                      <section className='mb-32 text-center md:text-left mx-8 pt-20'>
                        <div className='block rounded-lg bg-gradient-to-r from-black to-gray-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex md:flex-wrap'>
                          <div className='md:flex md:flex-wrap md:items-center'>
                            <div className='w-full md:w-auto md:h-52 md:ml-0'>
                              <img
                                quality={100}
                                src={tes.image}
                                alt='person'
                                className='w-full h-full rounded-lg'
                                width={200}
                              />
                            </div>
                            <div className='w-full md:w-6/12 xl:w-8/12 md:ml-4'>
                              <div className='px-6 py-12 md:px-2 rounded-b-lg'>
                                <FaQuoteRight className='text-neutral-600 text-6xl' />
                                <div className='-mt-7'>
                                  <p className='mb-1 text-neutral-400'>
                                    {tes.qualification}
                                  </p>
                                  <p className='mb-4 text-sm text-neutral-400'>
                                    {tes.description}
                                  </p>
                                  <h2 className='text-xl text-neutral-300 font-bold text-primary'>
                                    {tes.name}
                                  </h2>
                                  <p className='mb-2 text-base text-neutral-400'>
                                    {tes.job}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </SplideSlide>
                )
            )}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonial;
