import React from 'react';
import Work from '@/components/ourWork/work';
import WorkSpace from '@/components/ourWork/workspace';
import Consultancy from '@/components/ourWork/consultancy';
import Incubation from '@/components/ourWork/incubation';
import Recuritment from '@/components/ourWork/recruitmentJobMatch';
import BusinessProcess from '@/components/ourWork/businessProcess';
import Go from '@/components/ourWork/go';
import TrainingSkill from '@/components/ourWork/TrainingSkill';
import Training from '@/components/ourWork/training';

const page = () => {
  return (
    <div>
      <Work />
      <div className='py-32'>
        <TrainingSkill />
      </div>
      <div className=''>
        <Training />
      </div>
      <Consultancy />
      <div className='py-32'>
        <WorkSpace />
      </div>
      <div className='pb-32'>
        <Recuritment />
      </div>
      <div className='pb-32'>
        <Incubation />
      </div>
      <div className='pb-32'>
        <BusinessProcess />
      </div>
      <div className='pb-32'>
        <Go />
      </div>
    </div>
  );
};

export default page;
