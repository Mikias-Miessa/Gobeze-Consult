import React from 'react';
import Work from '@/components/ourWork/work';
import WorkSpace from '@/components/ourWork/workspace';
import Consultancy from '@/components/ourWork/consultancy';
import Incubation from '@/components/ourWork/incubation';
import Recuritment from '@/components/ourWork/recruitmentJobMatch';
import BusinessProcess from '@/components/ourWork/businessProcess';
import Go from '@/components/ourWork/go';
import TrainingSkill from '@/components/ourWork/TrainingSkill';

const page = () => {
  return (
    <div>
      <Work />
      <TrainingSkill />
      <Consultancy />
      <div className='py-32'>
        <WorkSpace />
      </div>
      <Recuritment />
      <Incubation />
      <BusinessProcess />
      <Go />
    </div>
  );
};

export default page;
