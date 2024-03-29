import React from 'react'
import Image from "next/image"

function Firstsec() {
  return (
    <div
    className='bg-cover bg-center w-full md:h-96 h-60 overflow-hidden md:mb-6 mb-3'
      style={{
        backgroundImage: `url("/images/about/our_story.jpg")`, 
      }}>
       <div className='md:my-40 my-28'>
      <h1 className="text-center font-extrabold text-3xl md:text-8xl text-white">OUR STORY</h1>
      <h1 className='h-1 md:w-28 w-16 bg-orange-500 md:mt-6 mt-2 mx-auto my-auto'></h1>

    </div>
    </div>
  )
}

export default Firstsec;

// import React from 'react';

// const about = () => {
//   return (
//     <div
//       id='about'
//       className='bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white min-h-screen w-full'
//       style={{ backgroundImage: `url("/images/about/AboutUs.png")` }}
//     >
//       <div className='w-full md:flex'>
//         <div className='md:w-1/2 md:pl-44 flex items-center justify-center md:items-center md:h-screen'>
//           <div className='pl-4 md:pl-0 flex mb-32 md:flex-col gap-2'>
//             <div className='text-6xl md:text-8xl font-bold'>ABOUT</div>
//             <div className='w-3/4 md:w-[90%] h-2 bg-orange-500'></div>
//             <div className='text-6xl md:text-8xl font-bold'>US.</div>
//           </div>
//         </div>
//         <section className='md:w-1/2 flex md:items-end md:-mt-24 items-start md:h-screen'>
//           <div className='flex flex-col items-end'>
//             <div className='mb-2 py-3 px-6 bg-orange-500 text-xl md:text-3xl z-10'>
//               Our Mission.
//             </div>
//             <div className='bg-gradient-to-b p-5 md:ml-4 from-black to-gray-500 -mt-4 md:-mt-10 py-5 md:py-10 text-start md:text-center'>
//               Present the job matching services that connect talent with
//               creative industry opportunities.
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default about;
