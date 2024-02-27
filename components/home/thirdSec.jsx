import React from 'react'
import Image from 'next/image'
import Faces from "@/public/images/faces.png"
import Community1 from "@/public/images/community_one.png"
import Community2 from "@/public/images/community_two.png"
import Community3 from "@/public/images/community_three.png"
import Community4 from "@/public/images/community_four.png"

function Feature3() {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:m-20'>

            <div className='text-white grid md:grid-cols-2 grid-cols-1 mx-4'>

                <div>
                    <div className='bg-black px-5 pb-3 pt-5 m-5 '>
                        <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                        <Image src={Community1} alt='community' className='mx-auto my-auto pt-4'/>
                        </div>
                        <p className='text-gray-400 text-center pt-4'>Present the job matching services that present the job matching services that.</p>
                    </div>
                    
                    <div className='bg-black px-5 pb-3 pt-5 m-5 mt-10 '>
                        <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                        <Image src={Community2} alt='community' className='mx-auto my-auto pt-4'/>
                        </div>
                        <p className='text-gray-400 text-center pt-4'>Present the job matching services that present the job matching services that.</p>
                    </div>
                </div>

                <div>

                <div className='bg-black px-5 pb-3 pt-5 m-5'>
                        <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                        <Image src={Community3} alt='community' className='mx-auto my-auto pt-4'/>
                        </div>
                        <p className='text-gray-400 text-center pt-4'>Present the job matching services that present the job matching services that.</p>
                    </div>

                    <div className='bg-black px-5 pb-3 pt-5 m-5 mt-10'>
                        <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                        <Image src={Community4} alt='community' className='mx-auto my-auto pt-4'/>
                        </div>
                        <p className='text-gray-400 text-center pt-4'>Present the job matching services that present the job matching services that.</p>
                    </div>
                </div>
            </div>

            <div className='ml-10 mx-4 mt-5'>
                <h1 className='text-3xl font-extrabold '>THIRD SECTION FEATURES</h1>
                <div className='h-1 w-16 bg-orange-500 mt-1'></div>
                <p className='text- text-gray-800 mt-6'>Present the job matching services that connect talent with creative industry opportunties loream epsum epsum opportunties loream epsum epsum.</p>
                <button className='mb-16 mt-10 text-xl px-8 py-2 bg-gradient-to-r from-gray-100 to-black rounded'>Read More</button>
                <div className='md:mt-10 mt-5 md:mb-0 mb-4 mr-8 md:py-14'><Image src={Faces} alt='face' /></div>
            </div>

        </div>
    </div>
  )
}

export default Feature3