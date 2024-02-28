import React from 'react'
import Image from 'next/image'
import ImgFea from '@/public/images/girl_behind.png'

function Feature() {
  return (
    <div>
      {/* Feature 2 */}
      <div className='bg-black'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2 pb-10 md:pl-10 mx-20'>
          <div className='md:col-span-2 mt-10 md:m mb-4 md:mb-24 h-96 w-full md:w-auto'>
            <Image alt='benfit' src={ImgFea} className='h-100 w-full md:w-96' />
          </div>

          <div className='text-white md:col-span-3 mt-3'>
            <div>
              <h1 className='text-white md:mt-20 mt-20 mb-3 font-extrabold text-3xl'>THE BENEFITS</h1>
              
              <div className='h-1 w-20 bg-orange-500'></div>

              <div className='grid grid-cols-1 md:grid-cols-2 mt-20'>
                <div className='md:mr-10'>
                  <div>
                    <h1 className='text-xl mb-4 font-semibold'>Present the Job1</h1>
                    <p className='text-gray-400'>Lorem ipsum amet consectetur elit dolor sit amet consectetur elit.</p>
                  </div>
                  <div className='mt-10'>
                    <h1 className='text-xl mb-4 font-semibold'>Present the Job2</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor amet consectetur elit sit adipisicing elit  amet consectetur elit.</p>
                  </div>
                </div>
                <div className='md:mr-10'>
                  <div className=''>
                    <h1 className='text-xl md:mt-0 mt-4 mb-4 font-semibold'>Present the Job3</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur sit adipisicing elit  amet consectetur elit .</p>
                  </div>
                  <div className='mt-10'>
                    <h1 className='text-xl mb-4 font-semibold'>Present the Job4</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur elit.</p>
                  </div>
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
