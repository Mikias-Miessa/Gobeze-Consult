import React from 'react';
import Work from '@/components/ourWork/work';
import WorkSpace from '@/components/ourWork/workspace';
import Consultancy from '@/components/ourWork/consultancy';
import Recuritment from "@/components/ourWork/recruitmentJobMatch"
import Incubation from '@/components/ourWork/incubation';

const page = () => {
  return (
    <div>
      <Work />
      <Consultancy />
      <WorkSpace/>
      <Recuritment/>
      <Incubation />
    </div>
  );
};

export default page;
