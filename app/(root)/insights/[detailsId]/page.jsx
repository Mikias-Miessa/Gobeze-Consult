'use client';

import Image from 'next/image';
import Detail from '@/public/images/insights/rectangleDetail.jpg';
import Rectangle3 from '@/public/images/insights/blog1.png';
import Rectangle2 from '@/public/images/insights/blog2.png';
import Rectangle1 from '@/public/images/insights/blog3.png';
import SectionTitle from '@/components/shared/sectionTitle';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogById, selectBlogById, selectLoading } from '@/store/blogSlice';
import { Bars } from 'react-loader-spinner';
import moment from 'moment';
const data = [
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
  {
    id: '2',
    description:
      "Ethiopia Athletics History has enjoyed a rich tradition of producing some of the world's fastest distance runners over past decades. Abebe Bikila was the star of marathon running during the 1960s.",
    imageSrc: Rectangle2,
  },
];

const page = ({ params }) => {
  const { detailsId } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogById(detailsId));
  }, []);

  const { getBlogByIdStatus, selectedBlog } = useSelector(
    (state) => state.blog
  );

  return (
    <div>
      <div className='w-full bg-black h-20'></div>
      {getBlogByIdStatus === 'success' ? (
        <div className='md:mr-40 mr-5 md:ml-48 ml-5 md:my-14 my-5'>
          <div className='flex md:mb-16 mb-5'>
            <div className='md:mr-40 mr-5'>
              Posted on{' '}
              {selectedBlog.createdAt &&
                moment(selectedBlog.createdAt).format('LL')}
            </div>
            <div className='md:ml-80'>Posted by : {selectedBlog.author}</div>
          </div>
          <div className='md:text-7xl text-3xl font-bold'>
            {selectedBlog.title && selectedBlog.title}
          </div>
          <Image
            src={selectedBlog.image ? selectedBlog.image : Detail}
            className='md:h-full w-full  my-8 mr-5'
            width={500}
            height={800}
            alt='blog image'
          />
          <div className='grid  grid-cols-1 md:gap-10 gap-3 md:mb-8 mb-3'>
            <div className='md:mr-5 mr-2'>
              <h1 className='md:text-4xl text-2xl font-semibold mb-10 ml-5'>
                “ {selectedBlog.quote && selectedBlog.quote} “
              </h1>
              <h3>{selectedBlog.content}</h3>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default page;
