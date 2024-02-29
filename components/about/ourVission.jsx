import React from 'react'
import Image from 'next/image'
import ImageGirl from "@/public/outVission/girl_behind_trees.png"
import Community from "@/public/outVission/community_one.png"
import SecondPerson from "@/public/outVission/Second_image.png"

const featuresData = [
  {
    id: 1,
    imageSrc: Community1,
    description:
      'Present the job matching services that present the job matching services that.',
  },
  {
    id: 2,
    imageSrc: Community2,
    description:
      'Present the job matching services that present the job matching services that.',
  },
];

function ourVission() {
  return (
    <div className='grid grid-cols-7 gap-1 mr-20 mt-20 mb-5'>
      <div className='col-span-5'>
        <h1>our vission</h1>
        <div className='grid grid-rows-2 gap-1'>
          <div  className='grid grid-col-2 gap-3'>
            <div></div>
            <div></div>
          </div>
          <div>
            <Image src={SecondPerson} alt='VissionMen'/>
          </div>

        </div>

      </div>

      <div className='col-span-2'>
        <Image src={ImageGirl} alt='VissionGirlImg' className='h-full w-full'/>
      </div>

    </div>
  )
}

export default ourVission