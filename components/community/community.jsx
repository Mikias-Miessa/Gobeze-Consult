import React from 'react'
import Image from "next/image"

function Firstsec() {
  return (
    <div
    className='bg-cover bg-center w-full md:h-96 h-60 overflow-hidden md:mb-6 mb-3'
      style={{
        backgroundImage: `url("/images/community/our_community.jpg")`, 
      }}>
       <div className='md:my-40 my-28'>
      <h1 className="text-center font-extrabold text-3xl md:text-8xl text-white">OUR COMMUNITY</h1>
      <h1 className='h-1 md:w-28 w-16 bg-orange-500 md:mt-6 mt-2 mx-auto my-auto'></h1>

    </div>
    </div>
  )
}

export default Firstsec;

// import React from 'react';

// const community = () => {
//   return (
//     <div
//       className='bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center w-full overflow-hidden'
//       style={{
//         backgroundImage: `url("/images/community/start_community.png")`,
//       }}
//     >
//       <div className='h-full w-full relative flex items-center text-white'>
//         <div className='md:w-[65%] w-[90%] flex flex-col absolute pt-16'>
//           <div className='flex items-center z-10 md:h-24 h-16 bg-orange-500 w-[50%] relative -bottom-5'>
//             <h1 className='text-white md:text-5xl text-2xl font-semibold pl-16'>
//               Start Up
//             </h1>
//           </div>
//           <div className='z-10 bg-black opacity-70 h-fit relative'>
//             <p className='text-white pt-8 px-10 pb-5 md:text-2xl text-xl font-medium pl-20'>
//               <span className='font-extrabold text-white text-5xl'>F</span>rom formulating policy insights to actively engaging with the
//               community and influencing the trajectory of the next generation of
//               Ethiopian businesses, we are an active member of the startup eco
//               system in Ethiopia.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default community;
