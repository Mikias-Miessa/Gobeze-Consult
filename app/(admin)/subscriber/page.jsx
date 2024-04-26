'use client';
import React, { useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
// import { FaEdit } from 'react-icons/fa';
// import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllSubscribers,
  selectAllSubscribers,
  selectLoading,
  // deletePartner,
} from '@/store/subscriber';

const ViewSubscriber = () => {
  const dispatch = useDispatch();
  const subscribers = useSelector((state) => selectAllSubscribers(state));
  const loading = useSelector((state) => selectLoading(state));

  useEffect(() => {
    dispatch(getAllSubscribers());
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   dispatch(deletePartner(id)).then(() => {
  //     dispatch(getAllPartners());
  //   });
  // };

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
  if (!subscribers) {
    return <div>No subscribers available</div>;
  }

const totalEmails = subscribers.reduce((total, item) => total + (item.email ? 1 : 0), 0);


  return (
    <div className='pl-20 py-5'>
      <h5 className='text-4xl font-bold'>Subscribers Email:</h5>
      <p className='py-3 text-2xl'>{totalEmails} Total Subscribers</p>
      <div className='pt-10'>
        {subscribers?.map((item) => (
          <div
            key={item._id}
            className='h-fit max-w-sm border-gray-200 rounded shadow'
          >
            <div className='p-5'>
              <ol className=' mb-2 text-2xl font-semibold text-gray-900'>
                {item.email}
              </ol>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSubscriber;

// 'use client'
// import React, { useEffect } from 'react';
// import { Bars } from 'react-loader-spinner';
// // import { MdDelete } from 'react-icons/md';
// // import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   getAllSubscribers,
//   selectAllSubscribers,
//   selectLoading,
//   deleteSubscriber,
// } from '@/store/subscriber';

// const ViewSubscriber = () => {
//   const dispatch = useDispatch();
//   const subscribers = useSelector((state) => selectAllSubscribers(state));
//   const loading = useSelector((state) => selectLoading(state));

//   useEffect(() => {
//     dispatch(getAllSubscribers());
//   }, [dispatch]);

//   // const handleDelete = (id) => {
//   //   dispatch(deletePartner(id)).then(() => {
//   //     dispatch(getAllPartners());
//   //   });
//   // };

//   if (loading) {
//     return (
//       <div className=' h-screen bg-white flex justify-center items-center'>
//         <Bars
//           height='40'
//           width='40'
//           color='#FF7F00'
//           ariaLabel='bars-loading'
//           wrapperStyle={{}}
//           wrapperClass=''
//           visible={true}
//         />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold ">Subscribers Email</h1>
//       <ul>
//         {subscribers.map((email) => (
//           <div key={email?._id}
//           className='h-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow'
//         >
//           <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
//                 {email?.email}
//               </h5>
//           </div>
//         ))}
//       </ul>
//       {/* <div>Subscribers</div> */}
//     </div>
//   );
// };

// export default ViewSubscriber;
