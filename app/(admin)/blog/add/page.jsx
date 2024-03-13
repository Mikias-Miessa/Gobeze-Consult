'use client';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useRouter } from 'next/navigation'
import {useDispatch } from 'react-redux';
import { addBlog } from '@/store/blogSlice';

const AddBlog = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      image,
      content,
      title
    };

    dispatch(addBlog(cardData));
    router.push('/blog/view');

    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <div className='flex justify-center items-center bg-white py-10'>
      <div className='max-w-md w-full px-4 py-8 bg-gray-100 rounded-lg shadow-lg'>
        <h1 className='text-blue-500 font-bold text-2xl mb-4'>Add Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>Title</label>
            <input
              type='text'
              id='title'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter title'
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='content' className='block text-gray-700 font-bold mb-2'>Content</label>
            <textarea
              id='content'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter content'
              value={content}
              onChange={handleContentChange}
              rows={8}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='image' className='block text-gray-700 font-bold mb-2'>Image URL</label>
            <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setImage(base64)}
                className="w-full p-2 rounded-md"
              />
          </div>
          <div>
            <img src={image} alt="" className="w-full p-2 rounded-md" />
            </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
