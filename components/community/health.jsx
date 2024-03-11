import React from 'react'
import Image from "next/image"
import img1 from "@/public/images/community/eye1.png"
import img2 from "@/public/images/community/eye2.png"

function Health() {

    const data = [
        {
          id: '1',
          text: 'We help sponsor a set number of cataract surgeries per year.',
          image: img1,
        },
        {
          id: '2',
          text: 'We actively maintain the health care professionals and facilities rating platform - TiruHakim.com',
          image: img2,
        },
      ];

  return (
    <div className='bg-black md:mx-0 mx-6'>
        <div className='grid md:grid-cols-6 grid-cols-2 md:pl-28 md:pr-64 md:pt-20 md:pb-4'>
            <div className='md:col-span-2 bg-red-200'>
                {/* <p>dd</p> */}
                <Image src={img1} alt='imgHealth' className='md:h-60 h-full w-full'/>
            </div>
            <div className='md:col-span-4 bg-white px-4 md:pt-14 pt-5 pb-3 md:text-2xl text-xl'>
                <p>We help sponsor a set number of cataract surgeries per year.</p>
            </div>

        </div>

        <div className='grid md:grid-cols-6 grid-cols-2 md:pl-28 md:pr-64 md:pb-10'>
            <div className='md:col-span-4 bg-white px-4 md:pt-14 pt-5 pb-3 md:text-2xl text-xl'>
                <p>We actively maintain the health care professionals and facilities rating platform - TiruHakim.com</p>
            </div>
            <div className='md:col-span-2 bg-red-200'>
                {/* <p>dd</p> */}
                <Image src={img2} alt='imgHealth' className='md:h-60 h-full w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Health