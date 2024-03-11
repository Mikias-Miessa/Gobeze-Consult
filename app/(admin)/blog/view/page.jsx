'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs, selectAllBlogs, selectLoading } from '@/store/blogSlice';

const ViewBlog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  if (loading) {
    return (
      <div className='text-2xl font-bold my-4 text-center'>Loading...</div>
    );
  }

  return (
    <div className='flex justify-center items-center bg-white'>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        {blogs.map((item) => (
          <div
            key={item._id}
            className='block max-w-[18rem] text-surface shadow-secondary-1 m-4'
          >
            <h1 className='text-5xl'>{item.title}</h1>
            <div className='relative overflow-hidden bg-cover bg-no-repeat'>
              <Image
                className='mb-7'
                src={item.image}
                width={100}
                height={100}
                alt='the image'
              />
            </div>
            <div className='mb-7'>
              <p className='text-base'>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlog;
