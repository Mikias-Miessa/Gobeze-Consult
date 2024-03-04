import React from 'react'
import Image from "next/image"

function SomeSection() {
  return (
    <div id='someSection' className='md:mx-60 mx-5 md:my-6 my-2'>
        <div className='grid md:grid-cols-3 grid-cols-1'>
          <div className='md:mt-40 mt-5 md:mb-0 mb-5 md:mx-0 mx-10'>
            <h3 className='text-xl font-bold pb-2'>present</h3>
            <h1 className='font-bold text-3xl'>Present the Job</h1>
            <p className='pr-10 pt-3 text-gray-800'>Present the job matching services that connect talent with creative industry opportunities.</p>
            <button className='text-gray-900 bg-white border border-gray-900 font-bold text-xl px-10 py-3 mt-6'>Read More</button>
          </div>
          <div className='bg-black rounded-xl h-72 w-80 md:mx-0 mx-10'>
           <p className='text-white pt-32 px-5 text-sm text-center justify-center'>Present the job matching services that connect talent with creative industry opportunities.</p>
          </div>
          <div className='bg-black rounded-xl h-72 w-72 md:mt-80 mt-5 md:mx-0 mx-10'>
           <p className='text-white pt-28 px-5 text-sm text-center justify-center'>Present the job matching services that connect talent with creative industry opportunitiess.</p>
          </div>           
        </div>
    </div>
  )
}

export default SomeSection;