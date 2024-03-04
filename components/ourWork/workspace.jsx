import React from 'react';
import Image from "next/image";
import Rectangle from '@/public/images/work/workspace1.png'
import Rectangle2 from '@/public/images/work/workspace2.png'
import Rectangle3 from '@/public/images/work/workspace3.png'

const workSpaceData = [
  {
    id: 0,
    image: Rectangle,
  }
]

function WorkSpace() {
  return (
    <div id='workspace'> 
      <div className='grid md:grid-cols-3 grid-cols-1 md:mx-36 md:gap-8 my-3 mx-5'>
        <div className='md:mt-16 mt-5 md:mb-10 mb-5'>
          <h1 className='text-xl font-bold pb-4'>Present</h1>
          <h3 className='text-3xl font-extrabold'>Provision of workspace, meeting and conference solutions</h3>
          <p className='text-xl font-light mt-4'>Present the job matching services that connect talent with creative industry opportunities.</p>
        </div>
        <div>
          <Image src={Rectangle} alt='imgWorkSpace1' className='md:h-full h-80 md:mt-0 mt-2 md:mb-0 mb-2'/>
        </div>
        <div className=''>
        <Image src={Rectangle2} alt='imgWorkSpace2' className='md:mb-8 mb-2'/>
        <Image src={Rectangle3} alt='imgWorkSpace3' className=""/>
        </div>

      </div>

    </div>
  )
}

export default WorkSpace;