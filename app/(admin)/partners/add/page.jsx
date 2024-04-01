'use client';
import React, { useEffect, useRef, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addPartner, reset } from '@/store/partnerSlice';
import { toast, ToastContainer } from 'react-toastify';
const AddPartner = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { newPartnerAdded } = useSelector((state) => state.partner);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [logo, setLogo] = useState('');
  const id = useRef(null);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      logo,
      image,
      description,
      name,
    };

    dispatch(addPartner(cardData));
    // router.push('/partners/view');

    setName('');
    setDescription('');
    setImage('');
    setLogo('');
  };
  useEffect(() => {
    if (newPartnerAdded === 'pending') {
      id.current = toast.loading('Adding partners...'); // Display loading toast
    } else {
      // Dismiss loading toast if it's already shown
      if (id.current !== null) {
        toast.dismiss(id.current);
      }
    }

    if (newPartnerAdded === 'success') {
      toast.update(id.current, {
        render: 'Partner Added Successfully',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }
    if (newPartnerAdded === 'failed') {
      toast.update(id.current, {
        render: 'Failed to add partner',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }
  }, [newPartnerAdded]);

  return (
    <div className='flex justify-start pl-10 items-center bg-white py-5'>
      <div className='max-w-md  px-4 py-8 bg-white '>
        <h1 className='text-black font-bold text-2xl mb-4'>Add Partner</h1>
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
              id='name'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter title'
              value={name}
              onChange={handleNameChange}
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
              id='description'
              className=' appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter content'
              value={description}
              onChange={handleDescriptionChange}
              rows={8}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='logo'
              className='block text-orange-500 font-bold mb-2'
            >
              Logo URL
            </label>
            <FileBase64
              type='file'
              multiple={false}
              onDone={({ base64 }) => setLogo(base64)}
              className='w-full p-2 rounded-md'
            />
          </div>
          <div>
            <img src={logo} alt='' className='w-full p-2 rounded-md' />
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

export default AddPartner;
