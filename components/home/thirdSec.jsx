import React from 'react';
import Image from 'next/image';
import Faces from '@/public/images/faces.png';
import Community1 from '@/public/images/community_one.png';
import Community2 from '@/public/images/community_two.png';
import Community3 from '@/public/images/community_three.png';
import Community4 from '@/public/images/community_four.png';
import SectionTitle from '../shared/sectionTitle';

const featuresData = [
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
];

function Feature3() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:my-20 md:mx-40 md:mr-0 mr-2'>
        <div className='text-white grid md:grid-cols-2 grid-cols-1'>
          {featuresData.map((feature) => (
            <div key={feature.id}>
              <div className='bg-black px-5 pb-3 pt-5 m-5 '>
                <div className='w-28 h-28 bg-white mx-auto my-auto rounded-full'>
                  <Image
                    src={feature.imageSrc}
                    alt='community'
                    className='mx-auto my-auto pt-4'
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
          <SectionTitle title={'THIRD SECTION FEATURES'} color={'black'} />
          <p className='text-gray-800 mt-6'>
            Present the job matching services that connect talent with creative
            industry opportunities loream epsum epsum opportunities loream epsum
            epsum.
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

export default Feature3;
