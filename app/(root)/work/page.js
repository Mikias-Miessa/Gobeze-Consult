import React from 'react';
import Work from '@/components/ourWork/work';
import WorkSpace from '@/components/ourWork/workspace';
import Consultancy from '@/components/ourWork/consultancy';

const page = () => {
  return (
    <div>
      <Work />
      <Consultancy />
      <WorkSpace/>
    </div>
  );
};

export default page;
