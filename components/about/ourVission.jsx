import React from 'react';
import Image from 'next/image';
import trainCenter2 from '@/public/images/about/training_center 2.png';
import trainCenter1 from '@/public/images/about/training_center 1.png';

// const featuresData = [
//   {
//     id: 1,
//     imageSrc: Community,
//     description:
//       'Present the job matching services that present the job matching services that.',
//   },
//   {
//     id: 2,
//     imageSrc: Community,
//     description:
//       'Present the job matching services that present the job matching services that.',
//   },
// ];

function OurVission() {
  return (
    <div id='vision' className='bg-black'>
      <div className='grid md:grid-cols-7 grid-cols-1 md:mr-24 mr-0 md:pt-20 pt-4 pb-5'>
        <div className='col-span-5'>
          <h1 className='md:text-7xl text-4xl md:font-bold font-medium'>
            <span className='bg-orange-500 pl-28 text-white'>our </span>
            <span className='bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-transparent bg-clip-text'>
              Mission
            </span>
          </h1>
          <div className='md:ml-20 ml-4 mb-4 mt-7'>
            <div className='col-span-'>
              <div className='bg-white md:px-5 pt-5 m-1 '>
                {/* <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                  <Image
                    src={Community}
                    alt='community'
                    className='mx-auto my-auto pt-4'
                  />
                </div> */}
                <p className='text-black text-center py-20 text-xl'>
                  Help good people win, by providing them with easy access to
                  the right skills, tools, inspiration and support required to
                  realize their potential and become wildly successful in life.
                </p>
              </div>
            </div>
            {/* <div className='col-span-'>
              <div className='bg-black md:px-5 pb-3 pt-5 m-5 '>
                <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                  <Image
                    src={Community}
                    alt='community'
                    className='mx-auto my-auto pt-4'
                  />
                </div>
                <p className='text-gray-400 text-center pt-4'>
                  lPresent the job matching services that present the job
                  matching services that.
                </p>
              </div>
            </div> */}
          </div>

          <div className='mr-20'>
            <Image
              src={trainCenter2}
              alt='VisionPerson'
              className='md:h-72 h-52 md:w-full w-80 md:m-20 m-8 md:my-0'
            />
          </div>
        </div>

        <div>
          <Image src={SecondPerson} alt='VisionPerson'  className='md:h-72 h-52 md:w-full w-80 md:m-20 m-8 md:my-0'/>
        </div>
      </div>
    </div>
  );
}

export default OurVission;
