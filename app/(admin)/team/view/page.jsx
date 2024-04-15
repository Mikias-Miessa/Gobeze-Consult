'use client';
import React, { useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTeams,
  selectAllTeams,
  selectLoading,
  deleteTeam,
} from '@/store/teamSlice';

const ViewTeam = () => {
  const dispatch = useDispatch();
  const teams = useSelector(selectAllTeams);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTeam(id)).then(() => {
      dispatch(getAllTeams());
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
        {teams &&
          teams.map((item) => (
            <div
              key={item._id}
              className='h-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow'
            >
              <Image
                className='rounded-t-lg h-[300px] object-cover'
                src={item.image}
                width={500}
                height={500}
                alt='the image'
              />
              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  {item.name}
                </h5>
                <div className='h-24 overflow-hidden'>
                  <p className='text-sm mb-3 font-normal text-gray-700 overflow-hidden overflow-ellipsis'>
                    {item.position}
                  </p>
                </div>

                <div className='flex justify-between gap-10 mt-4'>
                  <Link href={`/team/edit/${item._id}`} className=''>
                    <FaEdit
                      size={25}
                      className='text-gray-500 hover:text-gray-700'
                    />
                  </Link>
                  <MdDelete
                    size={25}
                    onClick={() => handleDelete(item._id)}
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

export default ViewTeam;
