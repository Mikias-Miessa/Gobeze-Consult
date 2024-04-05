'use client';
import React from 'react';
import Image from 'next/image';
import Rectangle3 from '@/public/images/insights/blog1.png';
import Rectangle2 from '@/public/images/insights/blog2.png';
import Rectangle1 from '@/public/images/insights/blog3.png';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllBlogs,
  getBlogById,
  selectAllBlogs,
  selectBlogById,
  selectLoading,
} from '@/store/blogSlice';
import { Bars } from 'react-loader-spinner';
const data = [
  {
    id: '1',
    title: 'Athletics',
    heading: 'Who is Haile Gebresilassie?',
    description:
      'Haile Gebrselassie is considered one of the greatest runners in history, with victories and world records in almost every long-distance and middle-distance event.',
    imageSrc: Rectangle1,
  },
  {
    id: '2',
    title: 'Athletics',
    heading: 'Ethiopian Athletics',
    description:
      "Ethiopia Athletics History has enjoyed a rich tradition of producing some of the world's fastest distance runners over past decades. Abebe Bikila was the star of marathon running during the 1960s.",
    imageSrc: Rectangle2,
  },
  {
    id: '3',
    title: 'Entertainment',
    heading: 'Ethiopian Music Industry',
    description:
      "Ethiopian oldies music has enjoyed a rich tradition of producing some of the world's fastest distance runners over past decades. Abebe Bikila was the star of marathon running during the 1960s.",
    imageSrc: Rectangle3,
  },
];

const data2 = [
  {
    id: '1',
    description:
      'Haile Gebrselassie is considered one of the greatest runners in history, with victories and world records in almost every long-distance and middle-distance event.',
    imageSrc: Rectangle1,
  },
  {
    id: '2',
    description:
      "Ethiopia Athletics History has enjoyed a rich tradition of producing some of the world's fastest distance runners over past decades. Abebe Bikila was the star of marathon running during the 1960s.",
    imageSrc: Rectangle2,
  },
  {
    id: '3',
    description:
      "Ethiopian oldies music has enjoyed a rich tradition of producing some of the world's fastest distance runners over past decades. Abebe Bikila was the star of marathon running during the 1960s.",
    imageSrc: Rectangle3,
  },
];

const blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  const blogs = useSelector((state) => selectAllBlogs(state));
  const loading = useSelector((state) => selectLoading(state));
  if (loading) {
    return (
      <div className=' h-screen bg-white flex justify-center items-center'>
        <Bars
          height='40'
          width='40'
          color='#FF7F00'
          ariaLabel='bars-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className='py-5'>
      <h1 className='text-center text-lg font-semibold'>RECENT BLOGS</h1>
      <h1 className='text-center text-2xl font-semibold mb-5'>
        Check out the blogs you might have missed
      </h1>
      <h1 className='h-1 md:w-28 w-10 bg-orange-500 md:mt-6 mt-2 mb-10 mx-auto my-auto'></h1>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        {blogs.map((item) => (
          <div
            key={item._id}
            className='block max-w-[18rem] text-surface shadow-secondary-1 m-4'
          >
            <div className='relative overflow-hidden bg-cover bg-no-repeat'>
              <Image
                className='mb-7 max-w-[18rem]'
                src={item.image && item.image}
                alt='the image'
                width={288}
                height={151}
              />
            </div>
            <div className='mb-7'>
              <p className='font-light italic text-sm'>"{item.title}"</p>
              <p className='font-semibold py-2 text-sm'>{item.tag}</p>
              <p className='text-base h-[120px] overflow-hidden  overflow-ellipsis'>
                {item.content}
              </p>
            </div>
            <div className='bg-black text-white text-2xl text-center py-4 hover:text-gray-400 cursor-pointer'>
              <a href={'/insights/' + item._id} className=' py-4 '>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <div className='mt-10'>
        <h1 className='text-center text-lg font-semibold'>RECENT BLOGS</h1>
        <h1 className='text-center text-2xl font-semibold mb-5'>
          Check out the blogs you might have missed
        </h1>
        <h1 className='h-1 md:w-28 w-10 bg-orange-500 md:mt-6 mt-2 mx-auto my-auto'></h1>
        <div className='flex flex-wrap justify-center items-center gap-10'>
          {data2.map((item) => (
            <div
              key={item.id}
              className='block max-w-[18rem] text-surface shadow-secondary-1 m-4'
            >
              <div className='relative overflow-hidden bg-cover bg-no-repeat'>
                <Image className='mb-7' src={item.imageSrc} alt='the image' />
              </div>
              <div className='mb-7'>
                <p className='text-base'>{item.description}</p>
              </div>
              <div className='bg-black text-center py-4'>
                <a href='/insights/detail' className='text-white text-2xl py-2'>
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default blogs;
