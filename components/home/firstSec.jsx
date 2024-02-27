import React from 'react'
import Image from 'next/image'
import Featureppl from "@/public/images/feappl.png"

function Feature() {
  return (
    <div>
      <div className='md:mx-32 md:my-20 mx-0 my-0'>

<div className='grid grid-cols-1 md:grid-cols-2 gap-0 bg-black rounded-2xl'>

  <div className='pl-20 text-white'>
    <h1 className='pt-20  text-3xl font-semibold '>FEATURED VIEWS</h1>
    <h2 className='pb-8 text-gray-400 text-2xl '>Some of the views</h2>
    <h3 className='text-gray-400 text-xl'>Present the job matching service that connect talent with creative industry opportunties.</h3>
     {/* <h3 className='text-gray-400'>connect talent with creative industry </h3>
     <h3 className='text-gray-400'>opportunties. </h3> */}
    <button className='mb-16 mt-10 text-xl px-8 py-2 bg-gradient-to-r from-gray-900 to-orange-500 rounded'>Read More</button>
  </div>

  <div className=''>
    <div className=' bg-white rounded-lg md:mr-40 md:mt-32 ml-10 mr-40 mt-5 mb-20'>
      <div className='grid grid-cols-2 gap-2 ml-4 '>
        <div className='pt-2 '>
          <h1 className='md:text-xl text-sm font-bold pt-5 pb-3'>Featured</h1>
          <h3 className='text-xs pb-5'>Present the job matching service that connect</h3>
        </div>

        <div>
          <Image src={Featureppl} className='md:pt-10 md:pl-6 pt-10 pl-6 '/>
        </div>
      </div>

    </div>
  </div>



</div>

</div>
    </div>
  )
}

export default Feature