import React from 'react'
import Image from "next/image"

function Firstsec() {
  return (
    <div
    className='bg-cover bg-center w-full md:h-96 h-60 overflow-hidden md:mb-6 mb-3'
      style={{
        backgroundImage: `url("/images/insights/bgInsights2.png")`, 
      }}>
       <div className='md:my-40 my-28'>
      <h1 className="text-center font-extrabold text-3xl md:text-8xl text-white">INSIGHTS</h1>
      <h1 className='h-1 md:w-28 w-16 bg-orange-500 md:mt-6 mt-2 mx-auto my-auto'></h1>

    </div>
    </div>
  )
}

export default Firstsec;