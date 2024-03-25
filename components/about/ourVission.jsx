import React from 'react'
import Image from 'next/image'
import ImageGirl from "@/public/outVission/girl_behind_trees2.png"
import Community from "@/public/outVission/community_one.png"
import SecondPerson from "@/public/outVission/second_image.png"

const featuresData = [
  {
    id: 1,
    imageSrc: Community,
    description:
      'Present the job matching services that present the job matching services that.',
  },
  {
    id: 2,
    imageSrc: Community,
    description:
      'Present the job matching services that present the job matching services that.',
  },
];

function OurVission() {
  return (
    <div id='vision'>
    <div className='grid md:grid-cols-7 grid-cols-1 md:mr-24 mr-0 md:mt-20 mt-4 mb-5'>
      <div className='col-span-5'>
      <h1 className='md:text-7xl text-4xl md:font-bold font-medium'>
        <span className='bg-orange-500 pl-28 text-white'>our </span>vision
      </h1>
        <div className='grid md:grid-cols-2 grid-cols-1 md:ml-24 ml-4 mb-4 mt-7'>
          <div className='col-span-'>
          <div className='bg-black md:px-5 pb-3 pt-5 m-5 '>
              <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                <Image src={Community} alt='community' className='mx-auto my-auto pt-4'/>
              </div>
              <p className='text-gray-400 text-center pt-4'>Present the job matching services that present the job matching services that.</p>
          </div>
          </div>
          <div className='col-span-'>
          <div className='bg-black md:px-5 pb-3 pt-5 m-5 '>
              <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                <Image src={Community} alt='community' className='mx-auto my-auto pt-4'/>
              </div>
              <p className='text-gray-400 text-center pt-4'>lPresent the job matching services that present the job matching services that.</p>
          </div>
          </div>

        </div>

        <div>
          <Image src={SecondPerson} alt='VisionPerson' className='md:h-72 h-52 md:w-full w-80 md:m-20 m-8 md:my-0'/>
        </div>

      </div>

      <div className='col-span-2'>
        <Image src={ImageGirl} alt='VissionGirlImage' height={100} className='md:absolute md:w-96 w-80 md:h-fit h-96 md md:ml-0 ml-10 md:my-4 my-1'/>
      </div>

    </div>
    </div>
  )

}

export default OurVission;