import React from 'react';
import Image from 'next/image';
import Faces from '@/public/images/faces.png';
import Community1 from '@/public/images/community_one.png';
import Community2 from '@/public/images/community_two.png';
import Community3 from '@/public/images/community_three.png';
import Community4 from '@/public/images/community_four.png';

function Feature3() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:m-20">
        <div className="text-white grid md:grid-cols-2 grid-cols-1 mx-4">
          <div>
            {renderCommunityBlock(Community1)}
            {renderCommunityBlock(Community2, true)}
          </div>
          <div>
            {renderCommunityBlock(Community3)}
            {renderCommunityBlock(Community4, true)}
          </div>
        </div>
        <div className="ml-10 mx-4 mt-5">
          <h1 className="text-3xl font-extrabold">THIRD SECTION FEATURES</h1>
          <div className="h-1 w-16 bg-orange-500 mt-1"></div>
          <p className="text-gray-800 mt-6">
            Present the job matching services that connect talent with creative
            industry opportunities loream epsum epsum opportunities loream epsum
            epsum.
          </p>
          <button className="mb-16 mt-10 text-xl px-8 py-2 bg-gradient-to-r from-gray-100 to-black rounded">
            Read More
          </button>
          <div className="md:mt-10 mt-5 md:mb-0 mb-4 mr-8 md:py-14">
            <Image src={Faces} alt="face" />
          </div>
        </div>
      </div>
    </div>
  );
}

function renderCommunityBlock(imageSrc, marginTop = false) {
  const classes = `bg-black px-5 pb-3 pt-5 m-5 ${marginTop ? 'mt-10' : ''}`;
  return (
    <div className={classes}>
      <div className="w-28 h-28 bg-white mx-auto my-auto rounded-full">
        <Image src={imageSrc} alt="community" className="mx-auto my-auto pt-4" />
      </div>
      <p className="text-gray-400 text-center pt-4">
        Present the job matching services that connect talent with creative
        industry opportunities loream epsum epsum opportunities loream epsum
        epsum.
      </p>
    </div>
  );
}

export default Feature3;
