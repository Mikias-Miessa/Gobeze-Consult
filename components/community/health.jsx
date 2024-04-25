import React from 'react';
import Image from 'next/image';
import img1 from '@/public/images/community/eye1.png';
import img2 from '@/public/images/community/eye2.png';

function Health() {
  return (
    <div className='bg-black md:mx-0 mx-6 my-10 md:my-32'>
      {/* First Section */}
      <div className='grid md:grid-cols-6 grid-cols-1 md:pl-40 md:pr-40 md:pt-20 md:pb-4'>
        <div className='md:col-span-2 mb-6 md:mb-0'>
          <Image src={img1} alt='imgHealth' className='md:h-80 h-full w-full' />
        </div>
        <div className='md:col-span-4 bg-white px-4 md:pt-14 pt-5 pb-3 md:text-xl text-base'>
          <p>
            <span className='font-bold md:text-2xl text-xl'>C</span>
            ataract is the world's leading eye disease that causes blindness.
            The prevalence of cataract aged 40 years and older is approximately
            11.8%–18.8%. Currently, surgery is the only way to treat cataracts.
            <span className='font-bold'>
              {' '}
              We help sponsor a set number of cataract surgeries per year.
            </span>
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className='md:hidden grid md:grid-cols-6 grid-cols-1 md:pl-40 md:pr-40 md:pb-10'>
        <div className='md:col-span-2'>
          <Image src={img2} alt='imgHealth' className='md:80 h-full w-full' />
        </div>
        <div className='md:col-span-4 bg-white px-4 md:pt-14 pt-5 pb-3 md:text-xl text-base'>
          <p>
            <span className='font-bold md:text-2xl text-xl'>T</span>
            iruHakim is a platform that rates healthcare professionals. It is a
            digital platform designed to provide individuals with the ability to
            rate and review their experiences with various healthcare
            professionals, such as doctors, nurses, dentists, therapists, and
            other practitioners. This platform aims to offer transparency and
            valuable information to help patients make informed decisions when
            choosing a healthcare provider.
          </p>
        </div>
      </div>

      <div className='hidden md:grid md:grid-cols-6 grid-cols-1 md:pl-40 md:pr-40 md:pb-10'>
        <div className='md:hidden md:col-span-2'>
          <Image src={img2} alt='imgHealth' className='md:80 h-full w-full' />
        </div>
        <div className='md:col-span-4 bg-white px-4 md:pt-14 pt-5 pb-3 md:text-xl text-base'>
          <p>
            <span className='font-bold md:text-2xl text-xl'>T</span>
            iruHakim is a platform that rates healthcare professionals. It is a
            digital platform designed to provide individuals with the ability to
            rate and review their experiences with various healthcare
            professionals, such as doctors, nurses, dentists, therapists, and
            other practitioners. This platform aims to offer transparency and
            valuable information to help patients make informed decisions when
            choosing a healthcare provider.
          </p>
        </div>
        <div className='hidden md:block md:col-span-2'>
          <Image src={img2} alt='imgHealth' className='md:80 h-full w-full' />
        </div>
      </div>
    </div>
  );
}

export default Health;
