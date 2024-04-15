'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import {
  getBlogById,
  selectBlogById,
  selectBlogEdited,
  selectLoading,
  updateBlog,
  reset,
} from '@/store/blogSlice';
import { Bars } from 'react-loader-spinner';

const editBlog = ({ params }) => {
  const { blogId } = params;
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(blogId);
  const blog = useSelector(selectBlogById);
  console.log(blog);
  const loading = useSelector(selectLoading);
  const blogEdited = useSelector(selectBlogEdited);
  useEffect(() => {
    dispatch(getBlogById(blogId));
  }, [dispatch, blogId]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title || '');
      setContent(blog.content || '');
      setImage(blog.image || '');
      setAuthor(blog.author || '');
      setQuote(blog.quote || '');
      setTag(blog.tag || '');
    }
  }, [blog]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };
  const handleQuoteChange = (e) => {
    setQuote(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBlogData = {
      blogId: blogId,
      blogData: {
        title: title,
        content: content,
        image: image,
        author: author,
        tag: tag,
        quote: quote,
      },
    };

    dispatch(updateBlog(updatedBlogData));
    setTitle('');
    setContent('');
    setImage('');
    setAuthor('');
    setQuote('');
    setTag('');
    router.push('/blog/view');
  };
  const id = useRef(null);
  // useEffect(() => {
  //   if (blogEdited === 'pending') {
  //     id.current = toast.loading('Editing blog...'); // Display loading toast
  //   } else {
  //     // Dismiss loading toast if it's already shown
  //     if (id.current !== null) {
  //       toast.dismiss(id.current);
  //     }
  //   }

  //   if (blogEdited === 'success') {
  //     toast.update(id.current, {
  //       render: 'Blog edited successfully',
  //       type: 'success',
  //       isLoading: false,
  //       autoClose: 4000,
  //     });
  //     dispatch(reset());
  //     router.push('/blog/view');
  // setTitle('');
  // setContent('');
  // setImage('');
  // setAuthor('');
  // setQuote('');
  // setTag('');
  //   }
  //   if (blogEdited === 'failed') {
  //     toast.update(id.current, {
  //       render: 'Failed to edit blog',
  //       type: 'error',
  //       isLoading: false,
  //       autoClose: 4000,
  //     });
  //     dispatch(reset());
  //   }
  // }, [blogEdited]);

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
    <div className=' flex justify-start pl-10 items-center bg-white py-5'>
      <div className='max-w-md  px-4 py-8 bg-white '>
        <h1 className='text-black font-bold text-2xl mb-4'>Edit Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-orange-500 font-bold mb-2'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter title'
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='quote'
              className='block text-orange-500 font-bold mb-2'
            >
              Quote
            </label>
            <input
              type='text'
              id='quote'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Quote'
              value={quote}
              onChange={handleQuoteChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='tag'
              className='block text-orange-500 font-bold mb-2'
            >
              Tag
            </label>
            <input
              type='text'
              id='tag'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Tag'
              value={tag}
              onChange={handleTagChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='author'
              className='block text-orange-500 font-bold mb-2'
            >
              Author
            </label>
            <input
              type='text'
              id='author'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Author'
              value={author}
              onChange={handleAuthorChange}
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
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
              className='mt-6 bg-black hover:bg-orange-500 hover:text-black text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36 tracking-wider'
              disabled={blogEdited === 'pending'}
            >
              {blogEdited === 'pending' ? 'Editing...' : 'Done'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default editBlog;
