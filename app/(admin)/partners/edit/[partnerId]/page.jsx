'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPartnerById,
  selectPartnerById,
  selectLoading,
  updatePartner,
} from '@/store/partnerSlice';
import { Bars } from 'react-loader-spinner';

const editPartner = ({ params }) => {
  const { partnerId } = params;
  const dispatch = useDispatch();
  const router = useRouter();

  const partner = useSelector((state) => selectPartnerById(state, partnerId));
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getPartnerById(partnerId));
  }, [dispatch, partnerId]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    if (partner) {
      setName(partner.name || '');
      setDescription(partner.content || '');
      setImage(partner.image || '');
      setLogo(partner.logo || '');
    }
  }, [partner]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPartnerData = {
      partnerId: partnerId,
      partnerData: {
        name: name,
        description: description,
        image: image,
        logo: logo,
      },
    };

    dispatch(updatePartner(updatedPartnerData));
    router.push('/partner/view');

    setName('');
    setDescription('');
    setImage('');
    setLogo('');
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
        <h1 className='text-black font-bold text-2xl mb-4'>Edit Partner</h1>
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
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter Name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='content'
              className='block text-orange-500 font-bold mb-2'
            >
              Description
            </label>
            <textarea
              id='content'
              className='appearance-none border rounded w-full md:w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter content'
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
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default editPartner;
