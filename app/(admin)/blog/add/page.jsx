'use client';
import React, { useEffect, useState, useRef } from 'react';
import FileBase64 from 'react-file-base64';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog } from '@/store/blogSlice';
import { toast, ToastContainer } from 'react-toastify';
import { selectNewBlogAdded, reset } from '@/store/blogSlice';
const AddBlog = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const newBlogAdded = useSelector((state) => selectNewBlogAdded(state));
  const id = useRef(null);
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
      title,
    };

    dispatch(addBlog(cardData));
    // router.push('/blog/view');

    setTitle('');
    setContent('');
    setImage('');
  };
  useEffect(() => {
    if (newBlogAdded === 'pending') {
      id.current = toast.loading('Adding blog...'); // Display loading toast
    } else {
      // Dismiss loading toast if it's already shown
      if (id.current !== null) {
        toast.dismiss(id.current);
      }
    }

    if (newBlogAdded === 'success') {
      toast.update(id.current, {
        render: 'Blog added successfully',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }
    if (newBlogAdded === 'failed') {
      toast.update(id.current, {
        render: 'Failed to add blog',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }
  }, [newBlogAdded]);
  return (
    <div className='flex justify-start pl-10 items-center bg-white py-5'>
      <div className='max-w-md  px-4 py-8 bg-white '>
        <h1 className='text-black font-bold text-2xl mb-4'>Add Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-orange-500 font-bold mb-2'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter title'
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='content'
              className='block text-orange-500 font-bold mb-2'
            >
              Content
            </label>
            <textarea
              id='content'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter content'
              value={content}
              onChange={handleContentChange}
              rows={8}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='image'
              className='block text-orange-500 font-bold mb-2'
            >
              Image URL
            </label>
            <FileBase64
              type='file'
              multiple={false}
              onDone={({ base64 }) => setImage(base64)}
              className='w-full p-2 rounded-md'
            />
          </div>
          <div>
            <img src={image} alt='' className='w-full p-2 rounded-md' />
          </div>
          <div className=''>
            <button
              type='submit'
              className='mt-6  bg-black hover:bg-orange-500 hover:text-black text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36 tracking-wider'
            >
              POST
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddBlog;
