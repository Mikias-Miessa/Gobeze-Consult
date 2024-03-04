import React from 'react'

function RecruitmentJobMatch() {
  
  return (
      <div id='recruitment' className='mx-32 mb-8 mt-12'>
        <div className=''>
        <h1 className='text-center font-extrabold mb-3 mt-3'>Recruitment</h1>
        <h1 className='text-center text-2xl font-semibold mb-2'>Radically Better Hiring</h1>
        <h3 className='text-center text-sm text-gray-600'>Gobeze Consult is radically improving the hiring process for candidates, recruiters and employers.</h3>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 mt-5'>
        <div className='bg-black text-white pl-14 pr-8'>
          <h1 className='font-extrabold pt-5 text-3xl'>RECRUITMENT</h1>
          <h1 className='font-extrabold text-3xl'>SERVICES</h1>
          <h1 className='pt-2 pb-14 font-semibold'>Recruitment service</h1>
          <p className="text-gray-400 ">Founded in 1998, The Christopher Group (TCG) has become one of the nation’s
             largest and most respected boutique Contained Executive HR Search firms and
              HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment. </p>
          <button className='border border-gray-300 text-gray-300 font-bold text-sm px-10 py-3 my-8'>Read More</button>
        </div>
        <div className='pl-14 pr-8'>
          <h1 className='font-extrabold pt-5 text-3xl'>JOB MATCHING</h1>
          <h1 className='font-extrabold text-3xl'>SERVICES</h1>
          <h1 className='pt-2 pb-14 font-semibold'>Job Matching services</h1>
          <p className="">Founded in 1998, The Christopher Group (TCG) has become one of the nation’s
             largest and most respected boutique Contained Executive HR Search firms and
              HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment. </p>
          <button className='border border-black text-black font-bold text-sm px-10 py-3 my-8'>Read More</button></div>
        </div>

      </div>
  )
}

export default RecruitmentJobMatch;