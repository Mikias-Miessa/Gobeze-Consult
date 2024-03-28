import React from 'react';
import Image from 'next/image';
import Faces from '@/public/images/faces.png';
import Community1 from '@/public/images/community/Ellipse1.png';
import Community2 from '@/public/images/community/Ellipse2.png';
import Community3 from '@/public/images/community/Ellipse3.png';
import Community4 from '@/public/images/community/Ellipse4.png';
import SectionTitle from '../shared/sectionTitle';

const data = [
  {
    id: 1,
    imageSrc: Community1,
    description:
      'Present the job matching services that present the job matching services that.',
  },
  {
    id: 2,
    imageSrc: Community2,
    description:
      'Present the job matching services that present the job matching services that.',
  },
  {
    id: 3,
    imageSrc: Community3,
    description:
      'Present the job matching services that present the job matching services that.',
  },
  {
    id: 4,
    imageSrc: Community4,
    description:
      'Present the job matching services that present the job matching services that.',
  },
  // {
  //   id: 5,
  //   heading: "Yenesew is a global initiative that emerged in response to the COVID-19 pandemic, aiming to support individuals who have lost their jobs by providing them with non-perishable food items and essential sanitization products.",
  // }
];

function SocialSupport() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:my-20 md:mx-40 md:mr-0 mr-2'>
        <div className='text-white grid md:grid-cols-2 grid-cols-1'>
          {data.map((feature) => (
            <div key={feature.id}>
              <div className='bg-black px-5 pb-3 pt-5 m-5 '>
                <div className='mb-2'>
                  <Image
                    src={feature.imageSrc}
                    alt='community'
                    className='mx-auto my-auto pt-4 size-32'
                  />
                </div>
                <p className='text-gray-400 text-center pt-4'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='ml-10 mx-4 mt-5'>
          <SectionTitle title={'Yene Sew'} color={'black'} />
          <p className='text-gray-800 mt-6 mr-14'>
          Yenesew is a global initiative that emerged in response to the COVID-19 pandemic, aiming to support individuals who have lost their jobs by providing them with non-perishable food items and essential sanitization products.
          </p>
          <button className='mb-16 mt-10 text-xl px-8 py-2 bg-gradient-to-r from-gray-100 to-black rounded'>
            Read More
          </button>
          <div className='md:mt-10 mt-5 md:mb-0 mb-4 mr-8 md:py-14'>
            <Image src={Faces} alt='face' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialSupport;
