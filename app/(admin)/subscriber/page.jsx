'use client';
import React, { useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllSubscribers,
  selectAllSubscribers,
  selectLoading,
  deleteSubscriber,
} from '@/store/subscriber';

const ViewSubscriber = () => {
  const dispatch = useDispatch();
  const subscribers = useSelector((state) => selectAllSubscribers(state));
  const loading = useSelector((state) => selectLoading(state));

  useEffect(() => {
    dispatch(getAllSubscribers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSubscriber(id)).then(() => {
      dispatch(getAllSubscribers());
    });
  };

  const formatSubscriptionDate = (subscriptionDate) => {
    if (!subscriptionDate) {
      return 'Subscription Date Not Available';
    }
    
    const date = new Date(subscriptionDate);
    if (isNaN(date.getTime())) {
      return 'Invalid Subscription Date';
    }
    
    const options = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour12: false,
    };
    
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  if (loading) {
    return (
      <div className='h-screen bg-white flex justify-center items-center'>
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

  if (!subscribers || subscribers.length === 0) {
    return <div className='bg-white'>No subscribers available</div>;
  }

  const totalEmails = subscribers.reduce((total, item) => total + (item.email ? 1 : 0), 0);

  return (
    <div className='pl-20 py-5 bg-white'>
      <h5 className='text-4xl font-bold'>Subscribers Email:</h5>
      <p className='py-3 text-2xl'>{totalEmails} Total Subscribers</p>
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>No</th>
            <th className='px-4 py-2'>Email</th>
            <th className='px-4 py-2'>Subscription Date</th>
            <th className='px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber, index) => (
            <tr key={subscriber._id}>
              <td className='border px-4 py-2'>{index + 1}</td>
              <td className='border px-4 py-2'>{subscriber.email}</td>
              {/* <td className='border px-4 py-2'>{formatSubscriptionDate(subscriber.subscriptionDate)}</td>
               */}
              <td className='border px-4 py-2'>{formatSubscriptionDate}</td>

              <td className='border px-4 py-2'>
                <MdDelete
                  size={25}
                  onClick={() => handleDelete(subscriber._id)}
                  className='text-red-500 hover:text-gray-700 cursor-pointer'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSubscriber;
