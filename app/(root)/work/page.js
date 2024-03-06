import React from 'react';
import Work from '@/components/ourWork/work';
import WorkSpace from '@/components/ourWork/workspace';
import Consultancy from '@/components/ourWork/consultancy';
import Recuritment from "@/components/ourWork/recruitmentJobMatch";
import BusinessProcess from '@/components/ourWork/businessProcess';

const page = () => {
  return (
    <div>
      <Work />
      <Consultancy />
      <WorkSpace/>
      <Recuritment/>
      <BusinessProcess/>
    </div>
  );
};

export default page;
