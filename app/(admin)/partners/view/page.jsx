'use client';
import React, { useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPartners,
  selectAllPartners,
  selectLoading,
  deletePartner,
} from '@/store/partnerSlice';

const ViewPartner = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state) => selectAllPartners(state));
  const loading = useSelector((state) => selectLoading(state));

  useEffect(() => {
    dispatch(getAllPartners());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePartner(id)).then(() => {
      dispatch(getAllPartners());
    });
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
    <div className='bg-white flex justify-center items-center py-10'>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        {partners.map((item) => (
          <div
            key={item?._id}
            className='h-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow'
          >
            <Image
              className='rounded-t-lg'
              src={item?.logo}
              width={100}
              height={100}
              alt='Logo'
            />
            <Image
              className='rounded-t-lg'
              src={item?.image}
              width={500}
              height={500}
              alt='Partner img'
            />
            <div className='p-5'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                {item?.name}
              </h5>
              <div className='h-24 overflow-hidden'>
                <p className='text-sm mb-3 font-normal text-gray-700 overflow-hidden overflow-ellipsis'>
                  {item?.description}
                </p>
              </div>

              <div className='flex justify-between gap-10 mt-4'>
                <Link href={`/partners/edit/${item?._id}`} className=''>
                  <FaEdit
                    size={25}
                    className='text-gray-500 hover:text-gray-700'
                  />
                </Link>
                <MdDelete
                  size={25}
                  onClick={() => handleDelete(item?._id)}
                  className='text-gray-500 hover:text-gray-700 cursor-pointer'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPartner;
