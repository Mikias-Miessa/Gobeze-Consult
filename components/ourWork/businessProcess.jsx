import React from 'react';
import Image from 'next/image';
import ImgFea from '@/public/images/girl_behind.png';
import SectionTitle from '../shared/sectionTitle';

const jobsData = [
  {
    id: 1,
    title: 'Present the Job1',
    description: 'Lorem ipsum amet consectetur elit dolor sit amet consectetur elit.',
  },
  {
    id: 2,
    title: 'Present the Job2',
    description: 'Lorem ipsum dolor amet consectetur elit sit adipisicing elit amet consectetur elit.',
  },
  {
    id: 3,
    title: 'Present the Job3',
    description: 'Lorem ipsum dolor sit amet consectetur sit adipisicing elit amet consectetur elit.',
  },
  {
    id: 4,
    title: 'Present the Job4',
    description: 'Lorem ipsum dolor sit amet consectetur elit.',
  },
];

function BusinessProcess() {
  return (
    <div>
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2 pb-10 md:pl-10 md:mx-40  '>
          <div className='md:col-span-2 mt-10 md:m mb-4 md:mb-24 h-96 w-full md:w-auto'>
            <Image alt='benefit' src={ImgFea} className='h-100 w-full md:w-96 ' />
          </div>

          <div className='text-white md:col-span-3 mt-8 ml-10'>
            <div className='md:mt-3 mt-20'>
              <SectionTitle color={'black'} title={'Business Process Outsourcing solutions'} />

              <div className='grid grid-cols-1 md:grid-cols-2 mt-16'>
                {jobsData.map((job) => (
                  <div key={job.id} className='md:mr-10'>
                    <div>
                      <h1 className='text-xl mb-4 font-semibold text-black'>{job.title}</h1>
                      <p className='text-gray-500'>{job.description}</p>
                    </div>
                    <div className='mt-10'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessProcess;
