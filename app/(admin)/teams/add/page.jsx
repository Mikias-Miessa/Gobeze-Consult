'use client';
import React, { useEffect, useState, useRef } from 'react';
import FileBase64 from 'react-file-base64';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addTeam } from '@/store/teamSlice';
import { toast, ToastContainer } from 'react-toastify';
import { selectNewTeamAdded, reset } from '@/store/teamSlice';
const AddTeam = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const newTeamAdded = useSelector((state) => selectNewTeamAdded(state));
  const id = useRef(null);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      image,
      position,
      name,
    };

    dispatch(addTeam(cardData));
    // router.push('/teams/view');

    setName('');
    setPosition('');
    setImage('');
  };
  useEffect(() => {
    if (newTeamAdded === 'pending') {
      id.current = toast.loading('Adding teams...'); // Display loading toast
    } else {
      // Dismiss loading toast if it's already shown
      if (id.current !== null) {
        toast.dismiss(id.current);
      }
    }

    if (newTeamAdded === 'success') {
      toast.update(id.current, {
        render: 'Team added successfully',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }
    if (newTeamAdded === 'failed') {
      toast.update(id.current, {
        render: 'Failed to add team',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }
  }, [newTeamAdded]);
  return (
    <div className='flex justify-start pl-10 items-center bg-white py-5'>
      <div className='max-w-md  px-4 py-8 bg-white '>
        <h1 className='text-black font-bold text-2xl mb-4'>Add Team</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-orange-500 font-bold mb-2'
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Full Name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-orange-500 font-bold mb-2'
            >
              Postion
            </label>
            <input
              type='text'
              id='position'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter position'
              value={position}
              onChange={handlePositionChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='image'
              className='block text-orange-500 font-bold mb-2'
            >
              Profile Image 
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

export default AddTeam;
