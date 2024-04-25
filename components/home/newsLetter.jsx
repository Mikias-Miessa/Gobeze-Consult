'use client';
import React, { useEffect, useState, useRef } from 'react';
// import FileBase64 from 'react-file-base64';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addSubscriber, reset } from '@/store/subscriber';
import { toast, ToastContainer } from 'react-toastify';
// import { selectNewAdded, reset } from '@/store/blogSlice';
import axios from 'axios';

const NewsLetter = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  // const [subscribed, setSubscribed] = useState(false);
  // const [error, setError] = useState('');
  const {newSubscriberAdded } = useSelector((state) => state.subscriber);
  const id = useRef(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      email,
    };

    dispatch(addSubscriber(cardData));
    router.push('/subscriber');

    setEmail('');
  };
  useEffect(() => {
    if (newSubscriberAdded === 'pending') {
      id.current = toast.loading('Subscribing...'); // Display loading toast
    } else {
      // Dismiss loading toast if it's already shown
      if (id.current !== null) {
        toast.dismiss(id.current);
      }
    }

    if (newSubscriberAdded === 'success') {
      toast.update(id.current, {
        render: 'Subscribed Successfully',
        type: 'success',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }

    if (newSubscriberAdded === 'failed') {
      toast.update(id.current, {
        render: 'Failed to Subscribe',
        type: 'error',
        isLoading: false,
        autoClose: 4000,
      });
      dispatch(reset());
    }

  }, [newSubscriberAdded]);

  return (
    <div className='bg-[#FF7F00] h-fit text-white font-Dax py-10 w-[1920px]'>
      <div className='flex flex-col text-center items-center justify-center gap-2'>
        <p className='font-bold text-3xl'>Pitch Us Your Idea</p>
        {/* {subscribed ? (
          <div className='popup'>
            <p>Thank you for subscribing! Check your email for confirmation.</p>
          </div>
        ) : ( */}
          <form className='relative inline-block drop-shadow-lg mt-10' onSubmit={handleSubmit}>
            <input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
              className='w-[300px] md:w-[700px] py-2 px-3 border-2 h-14 rounded-xl outline-none bg-white pr-10 text-gray-600'
            />
            <button 
             type="submit" 
             className='absolute inset-y-0 right-0 flex items-center  bg-gradient-to-r from-slate-950 to-slate-500 cursor-pointer rounded-r-xl px-4'>
              Sign Up   
            </button>
          </form>
        {/* )
        } */}
      </div>
      {/* <style jsx>{`
        .popup {
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          padding: 10px;
          margin-bottom: 10px;
        }
        .error {
          color: red;
        }
      `}</style> */}
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;

// import React, { useState } from 'react';
// import axios from 'axios';

// const NewsLetter = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('/api/emails', { email });
//       // Optionally, you can display a success message to the user
//       console.log('Email submitted successfully');
//     } catch (error) {
//       // Handle errors
//       console.error('Error submitting email:', error);
//     }

//     // Reset the form after submission
//     setEmail('');
//   };
//   return (
//     <div className='bg-[#FF7F00] h-fit text-white font-Dax py-10 w-[1920px]'>
//       <div className='flex flex-col text-center items-center justify-center gap-2'>
//         <p className='font-bold text-3xl'>Pitch Us Your Idea</p>
//         {/* <p className='font-semibold text-2xl text-center w-[320px] md:w-[700px]'>
//           Would you like to receive additional information about new and
//           exciting opportunities?
//         </p> */}
//         <div className='relative inline-block drop-shadow-lg mt-10'>
//           <input
//             name='email'
//             type='text'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder='Email Address'
//             className='w-[300px] md:w-[700px] py-2 px-3 border-2 h-14 rounded-xl outline-none bg-white pr-10 text-gray-600'
//           />
//           <span
//             onClick={handleSubmit}
//             className='absolute inset-y-0 right-0 flex items-center  bg-gradient-to-r from-slate-950 to-slate-500 cursor-pointer rounded-r-xl px-4'
//           >
//             Sign Up
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsLetter;




// 'use client';
// import React, { useState } from 'react';
// import axios from 'axios';
// // import { LineWave } from 'react-loader-spinner';
// const NewsLetter = () => {
//   const [email, setEmail] = useState('');
//   const handleInputChange = (e) => {
//     const { value } = e.target;
//     setEmail(value);
//   };
//   //   const [loading, setLoading] = useState(false);
//   //   const [error, setError] = useState(null);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(email);
//     // setLoading(true);
//     // try {
//     //   const res = await axios.post(
//     //     '/api/email',
//     //     {
//     //       email: email,
//     //     },
//     //     {
//     //       headers: { 'Content-Type': 'application/json' },
//     //     }
//     //   );
//     //   console.log(res);
//     //   setLoading(false);
//     //   setEmail('');
//     // } catch (error) {
//     //   setError(error);
//     //   console.log('Error', error);
//     //   setLoading(false);
//     // }
//   };
//   return (
//     <div className='bg-[#FF7F00] h-fit text-white font-Dax py-10 w-[1920px]'>
//       <div className='flex flex-col text-center items-center justify-center gap-2'>
//         <p className='font-bold text-3xl'>Pitch Us Your Idea</p>
//         {/* <p className='font-semibold text-2xl text-center w-[320px] md:w-[700px]'>
//           Would you like to receive additional information about new and
//           exciting opportunities?
//         </p> */}
//         <div className='relative inline-block drop-shadow-lg mt-10'>
//           <input
//             name='email'
//             type='text'
//             value={email}
//             onChange={handleInputChange}
//             placeholder='Email Address'
//             className='w-[300px] md:w-[700px] py-2 px-3 border-2 h-14 rounded-xl outline-none bg-white pr-10 text-gray-600'
//           />
//           <span
//             onClick={handleSubmit}
//             className='absolute inset-y-0 right-0 flex items-center  bg-gradient-to-r from-slate-950 to-slate-500 cursor-pointer rounded-r-xl px-4'
//           >
//             Sign Up
//           </span>
//         </div>
//         {/* {loading && (
//           <div className='w-full flex justify-center items-center'>
//             <LineWave
//               visible={true}
//               height='100'
//               width='100'
//               color='#105a7E'
//               ariaLabel='line-wave-loading'
//               wrapperStyle={{}}
//               wrapperClass=''
//               firstLineColor='#105a7E'
//               middleLineColor='#105a7E'
//               lastLineColor='#105a7E'
//             />
//           </div>
//         )} */}
//         {/* {error !== null && (
//           <div className='flex justify-start w-full'>
//             <p className='text-sm text-red-500 font-semibold'>{error}</p>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default NewsLetter;


