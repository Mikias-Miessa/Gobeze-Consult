import React from 'react'
import img1 from "@/public/images/about/groupPartner.png"
import Image from "next/image"

function LastSec() {
  return (
    <div className='max-w-4xl mx-auto my-32 px-10'>
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-3'>
        <div className='md:pt-24 md:mt-0 mt-5 '>
            <h1 className='md:text-2xl text-xl text-gray-400'>A number of our grads are employed by prominent companies.
                 We also assist our graduates in finding internships at multiple companies.</h1>
            <button className='px-8 py-2 mt-8 text-base font-semibold border-gray-600 border text-center text-black'>
            Explore
            </button>
        </div>
        <div> 
            <Image src={img1} alt='image partners' className='h-64  md:mt-0 mt-5'/>
        </div>
    </div>
    </div>
  )
}

export default LastSec