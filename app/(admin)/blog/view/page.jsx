'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllBlogs,
  selectAllBlogs,
  selectLoading,
  deleteBlog,
} from '@/store/blogSlice';

const ViewBlog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBlog(id)).then(() => {
      dispatch(getAllBlogs());
    });
  };

  if (loading) {
    return (
      <div className='text-2xl font-bold my-4 text-center'>Loading...</div>
    );
  }

  return (
    <div className='flex justify-center items-center py-10'>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        {blogs.map((item) => (
          <div
            key={item._id}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'
          >
            <Image
              className='rounded-t-lg'
              src={item.image}
              width={500}
              height={500}
              alt='the image'
            />
            <div className='p-5'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                {item.title}
              </h5>
              <p className='mb-3 font-normal text-gray-700'>{item.content}</p>
              <div className='flex justify-center gap-10'>
                <Link
                  href={`/blog/edit/${item._id}`}
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBlog;
