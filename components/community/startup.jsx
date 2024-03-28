import React from 'react'
import Image from "next/image"
import Startupimg from "@/public/images/community/startup.png"

function Startup() {
  return (
    <div className='bg-black'>
        <div className='grid grid-cols-2 pl-20 pb-10 h-4/6'>
            <div className='md:pt-16 pt-5 ml-10'>
              <h1 className='text-gray-200 font-light text-3xl'> <span className='font-bold text-gray-50 text-6xl'>F</span>rom formulating policy insights
                 to actively engaging with the community and influencing the trajectory of the next generation of Ethiopian businesses, we are an active member of the startup eco system in Ethiopia.
              </h1>
              <button className='border border-white font-bold text-sm px-10 py-3 text-white mt-10'>Learn More</button>
            </div>
            <div>
              <Image src={Startupimg} className='w-fit ml-16'/>
            </div>
        </div>
    </div>
  )
}

export default Startup