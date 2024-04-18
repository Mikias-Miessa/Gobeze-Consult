'use client';
import React, { useState } from 'react';
import axios from 'axios';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/subscriber', { email });
      // Optionally, you can display a success message to the user
      console.log('Email submitted successfully');
    } catch (error) {
      // Handle errors
      console.error('Error submitting email:', error);
    }

    // Reset the form after submission
    setEmail('');
  };
  return (
    <div className='bg-[#FF7F00] h-fit text-white font-Dax py-10 w-[1920px]'>
      <div className='flex flex-col text-center items-center justify-center gap-2'>
        <p className='font-bold text-3xl'>Pitch Us Your Idea</p>
        {/* <p className='font-semibold text-2xl text-center w-[320px] md:w-[700px]'>
          Would you like to receive additional information about new and
          exciting opportunities?
        </p> */}
        <div className='relative inline-block drop-shadow-lg mt-10'>
          <input
            name='email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email Address'
            className='w-[300px] md:w-[700px] py-2 px-3 border-2 h-14 rounded-xl outline-none bg-white pr-10 text-gray-600'
          />
          <span
            onClick={handleSubmit}
            className='absolute inset-y-0 right-0 flex items-center  bg-gradient-to-r from-slate-950 to-slate-500 cursor-pointer rounded-r-xl px-4'
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;


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


