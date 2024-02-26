import React from 'react'
import Image from 'next/image'
import ImgFea from '@/public/images/girl_behind.png'


function Feature() {
  return (
    <div>
    {/* Feature 2 */}

    <div className='bg-black'>
      <div className='grid grid-cols-5 gap-2  pb-10 pl-10'>
        <div className='col-span-2 mt-10 ml-10 mb-24 h-96 w-full'>
          <Image src={ImgFea} className='h-100 w-96'/>
        </div>

        <div className='text-white col-span-3 ml-14 mt-3'>
          <div>
          <h1 className="text-white mt-16 font-bold text-2xl">THE BENIFITS</h1>
          <hr className='w-12 h-24 mt-4 '></hr>

          <div className='grid grid-cols-2'>
            <div  className='mr-8'>
            <div>
              <h1 className='text-xl'>Present the Job1</h1>
              <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur elit. </p>
            </div>

              <div className='mt-6'>
              <h1 className='text-xl'>Present the Job2</h1>
              <p className='text-gray-400'>Lorem ipsum dolor sit adipisicing elit. </p>
              </div>
            </div>


            <div className='mr-8'>
            <div>
              <h1 className='text-xl'>Present the Job3</h1>
              <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur . </p>
              </div>
              <div className='mt-6'>
              <h1 className='text-xl'>Present the Job4</h1>
              <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur elit. </p>
              </div>
            </div>


          </div>

          </div>

          <div>
          
          </div>

        </div>
      </div>
    </div>

    </div>
  )
}


export default Feature