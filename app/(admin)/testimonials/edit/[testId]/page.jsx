'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTestById,
  selectTestById,
  selectLoading,
  updateTest,
} from '@/store/testSlice';
import { Bars } from 'react-loader-spinner';

const editTest = ({ params }) => {
  const { testId } = params;
  const dispatch = useDispatch();
  const router = useRouter();

  const test = useSelector((state) => selectTestById(state, testId));
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getTestById(testId));
  }, [dispatch, testId]);

  const [qualification, setQualification] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [job, setJob] = useState('');

  useEffect(() => {
    if (test) {
      setQualification(test.qualification || '');
      setDescription(test.description || '');
      setImage(test.image || '');
      setName(test.name || '');
      setJob(test.job || '');
    }
  }, [test]);

  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTestData = {
      testId: testId,
      testData: {
        qualification: qualification,
        description: description,
        image: image,
        name: name,
        job: job,
      },
    };

    dispatch(updateTest(updatedTestData));
    router.push('/testimonials/view');

    setQualification('');
    setDescription('');
    setImage('');
    setName('');
    setJob('');
  };

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
        <h1 className='text-black font-bold text-2xl mb-4'>Edit Testimonial</h1>
        <form onSubmit={handleSubmit}>
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
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter qualification'
              value={qualification}
              onChange={handleQualificationChange}
              required
            />
          </div>
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
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-orange-500 font-bold mb-2'
            >
              Job
            </label>
            <input
              type='text'
              id='job'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Job'
              value={job}
              onChange={handleJobChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-orange-500 font-bold mb-2'
            >
              Description
            </label>
            <textarea
              id='content'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Description'
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
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default editTest;
