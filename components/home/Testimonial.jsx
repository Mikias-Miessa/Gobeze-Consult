'use client';
import React from 'react';
import Image from 'next/image';
import Rectangle1 from '@/public/testimonial/Rectangle1.png';
import Rectangle2 from '@/public/testimonial/Rectangle2.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const test = [
  {
    id: '1',
    name: 'Jane Eyre',
    title: 'What is the format of a testimonial?',
    description:
      "Keep it short and conversational. Your testimonial should only be two or three paragraphs, at most. They should be written in your customer's tone so that your testimonial doesn't seem overly formal or technical.",
    job: 'Digital Marketer',
    imageSrc: Rectangle1,
  },
  {
    id: '2',
    name: 'Jane Eyre',
    title: 'What is the format of a testimonial?',
    description:
      "Keep it short and conversational. Your testimonial should only be two or three paragraphs, at most. They should be written in your customer's tone so that your testimonial doesn't seem overly formal or technical.",
    job: 'Digital Marketer',
    imageSrc: Rectangle2,
  },
];

const Testimonial = () => {
  return (
    <div className='my-10'>
      <div className='ml-24'>
        <div className='relative'>
          <div className='font-bold text-3xl pb-2'>TESTIMONIAL</div>
          <div className='absolute w-16 h-1 bg-orange-500 bottom-0 left-0 ml-1'></div>
        </div>
      </div>

      <div className=''>
        <Splide
          options={{
            autoplay: true,
            type: 'loop',
            interval: 3000,
            perPage: 1,
            padding: { left: 30, right: 30 },
            pagination: false,
            gap: '',
          }}
        >
          {test.length > 0 &&
            test.map(
              (tes) =>
                tes && (
                  <SplideSlide>
                    <div
                      key={tes.id}
                      className='container my-16 mx-auto md:px-6'
                    >
                      <section className='mb-32 text-center md:text-left mx-10'>
                        <div className='block rounded-lg bg-gradient-to-r from-black to-gray-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
                          <div className='md:flex md:flex-wrap md:items-center'>
                            <div className='w-full md:w-60 md:h-52 md:ml-16'>
                              <Image
                                quality={100}
                                src={tes.imageSrc}
                                alt='person'
                                className='w-full h-full rounded-lg'
                                width={200}
                              />
                            </div>
                            <div className='w-full md:w-6/12 xl:w-8/12'>
                              <div className='px-6 py-12 md:px-12 rounded-b-lg'>
                                <p className='mb-1 text-neutral-400'>
                                  {tes.title}
                                </p>
                                <p className='mb-4 text-neutral-400'>
                                  {tes.description}
                                </p>
                                <h2 className='text-2xl text-neutral-300 font-bold text-primary'>
                                  {tes.name}
                                </h2>
                                <p className='mb-2 text-neutral-400'>
                                  {tes.job}
                                </p>
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
