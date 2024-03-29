import React from 'react';
import Image from 'next/image';
import Rectangle10 from '@/public/images/work/Rectangle10.png';
import Rectangle9 from '@/public/images/work/Rectangle9.png';
import Rectangle8 from '@/public/images/work/Rectangle8.png';

function WorkSpace() {
  return (
    <div id='workspace'>
      <div className='grid md:grid-cols-3 grid-cols-1 md:mx-36 md:gap-3 my-3 mx-5'>
        <div className='md:mt-16 mt-5 md:mb-10 mb-5'>
          <h1 className='text-xl font-bold pb-2'>Services</h1>
          <h3 className='text-2xl font-extrabold'>
            Provision of workspace, meeting and conference solutions
          </h3>
          <p className='text-lg font-light mt-4'>
            From flexible workspaces tailored to your needs to state-of-the-art
            meeting rooms and flawless conference setups, we ensure seamless and
            productive environments for your business endeavors.
          </p>
          <div className='text-center bg-white border border-black mt-5 w-1/3'>
            <button className='px-0 py-1 text-black mx-auto'>
              Learn More
            </button>
          </div>
        </div>
        <div>
          <Image
            src={Rectangle8}
            alt='imgWorkSpace1'
            className='md:h-full h-80 md:mt-0 mt-2 md:mb-0 mb-2'
          />
        </div>
        <div className=''>
          <Image
            src={Rectangle9}
            alt='imgWorkSpace2'
            className='md:mb-10 mb-2'
          />
          <Image src={Rectangle10} alt='imgWorkSpace3' className='' />
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
