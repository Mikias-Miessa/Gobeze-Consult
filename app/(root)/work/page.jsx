import React from 'react';
import Work from '@/components/ourWork/work';
import WorkSpace from '@/components/ourWork/workspace';
import Consultancy from '@/components/ourWork/consultancy';
import Incubation from '@/components/ourWork/incubation';
import Recuritment from "@/components/ourWork/recruitmentJobMatch";
import BusinessProcess from '@/components/ourWork/businessProcess';
import Go from "@/components/ourWork/go";

const page = () => {
  return (
    <div>
      <Work/>
      <Consultancy/>
      <WorkSpace/>
      <Recuritment/>
      <Incubation />
      <BusinessProcess/>
      <Go/>
    </div>
  );
};

export default page;
