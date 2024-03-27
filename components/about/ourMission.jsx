import React from 'react'
import Image from 'next/image'
import ImageCenter from "@/public/images/about/training_center.png"
import ImageCenter2 from "@/public/images/about/training_c.png"
// import Community from "@/public/outVission/community_one.png"
// import SecondPerson from "@/public/outVission/second_image.png"

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

function OurMission() {
  return (
    <div id='vision' className=''>
    <div className='grid md:grid-cols-7 grid-cols-1 md:mt-20 mt-4 mb-5 pt-20 bg-black md:pr-20 pr-5 pb-3'>
      <div className='col-span-5'>
      <h1 className='md:text-7xl text-4xl md:font-bold font-medium text-gray-500'>
        <span className='bg-orange-500 pl-28 text-white'>OUR </span>MISSION
      </h1>
        <div className='md:ml-36 ml-5 mb-4 mt-7 mr-5 bg-white md:h-56 '>
            <h3 className='px-10 py-5 text-3xl text-center'> Help good people win, by providing them with easy access to the right 
                skills, tools, inspiration and support required to realize their potential and become wildly successful in life.</h3>

        </div>

        <div>
          <Image src={ImageCenter2} alt='VisionPerson' className='md:h-72 h-52 md:w-full w-80 md:m-20 m-8 md:my-0 md:pl-16 pl-1'/>
        </div>

      </div>

      <div className='col-span-2'>
        <Image src={ImageCenter} alt='VissionGirlImage' height={100} className='md:absolute md:w-96 w-80 md:h-fit h-96 md md:ml-0 ml-10 md:my-4 my-1'/>
      </div>

    </div>
    </div>
  )

}

export default OurMission;