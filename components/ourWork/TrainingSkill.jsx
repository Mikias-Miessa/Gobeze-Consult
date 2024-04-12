import React from 'react';
import Image from 'next/image';
import Rectangle2 from '@/public/images/work/workGo.png';
import Rectangle from '@/public/images/work/enabla.png';
import Rectangle3 from '@/public/images/work/traing3.png';

const TrainingSkill = () => {
  return (
    <div className=''>
      <div className='md:flex items-center max-w-screen-lg mx-auto gap-14 overflow-hidden md:px-0 px-14'>
        <div className='md:w-1/2'>
          <Image src={Rectangle2} alt='aster' className='' />
          <div className='flex md:gap-0 gap-3'>
            <Image src={Rectangle} alt='aster' className='md:w-full w-36' />
            <Image src={Rectangle3} alt='aster' className='md:w-full w-36' />
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='mb-5'>
            <h1 className='text-5xl md:text-7xl font-bold text-center md:text-start bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 inline-block text-transparent bg-clip-text'>
              Why We Do It
            </h1>
          </div>
          <div className='text-xl text-black'>
            Our aim at Gobeze Consult is firmly anchored in the conviction that
            good people deserve to succeed. Here, we highlight the concrete
            actions we do to assist people and organisations that are working to
            improve their communities and beyond. Our organisation assists
            individuals in obtaining cataract surgery in an effort to positively
            impact society and provide scholarships for courses to female
            students. We enjoy designing workspaces that are cosy and
            reminiscent of the people we care about.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSkill;
