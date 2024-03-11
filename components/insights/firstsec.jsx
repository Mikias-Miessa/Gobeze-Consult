import React from 'react'
import Image from "next/image"


function Firstsec() {
  return (
    <div
    className='bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center w-full h-fit overflow-hidden'
      style={{
        backgroundImage: `url("/images/insights/bgInsights2.png")`, 
      }}>
       <div className=''>
      <h1 className="font-extrabold text-2xl md:text-8xl text-white">INSIGHTS</h1>
      <div className='justify-center item-center h-1 w-20 bg-orange-500 mt-6 ml-20'></div>
    </div>
    </div>
  )
}

export default Firstsec;