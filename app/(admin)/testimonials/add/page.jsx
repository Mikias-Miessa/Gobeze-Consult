'use client';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addTest } from '@/store/testSlice';

const AddTestimonial = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [qualification, setQualification] = useState('');
  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      image,
      name,
      qualification,
      description,
    };

    dispatch(addTest(cardData));
    router.push('/testimonials/view');

    setQualification('');
    setName('');
    setImage('');
    setDescription('');
  };

  return (
    <div className='flex justify-start pl-10 items-center bg-white py-5'>
      <div className='max-w-md  px-4 py-8 bg-white '>
        <h1 className='text-black font-bold text-2xl mb-4'>Add Testimonial</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-orange-500 font-bold mb-2'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='qualification'
              className='block text-orange-500 font-bold mb-2'
            >
              Qualification
            </label>
            <input
              type='text'
              id='qualification'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Qualification'
              value={qualification}
              onChange={handleQualificationChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-orange-500 font-bold mb-2'
            >
              Message
            </label>
            <textarea
              id='description'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Message'
              value={description}
              onChange={handleDescriptionChange}
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
    </div>
  );
};

export default AddTestimonial;
