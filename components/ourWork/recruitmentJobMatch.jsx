import React from 'react';

function RecruitmentJobMatch() {
  const data = [
    {
      id: 1,
      title: 'RECRUITMENT SERVICES',
      description: 'Founded in 1998, The Christopher Group (TCG) has become one of the nation’s largest and most respected boutique Contained Executive HR Search firms and HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment.',
      button: {
        label: 'Read More',
        color: 'gray',
      },
    },
    {
      id: 2,
      title: 'JOB MATCHING SERVICES',
      description: 'Founded in 1998, The Christopher Group (TCG) has become one of the nation’s largest and most respected boutique Contained Executive HR Search firms and HR Direct Staffing Solutions firms. As an HR direct staffing agency, we specialize in the sourcing, assessment.',
      button: {
        label: 'Read More',
        color: 'black',
      },
    },
  ];

  return (
    <div id='recruitment' className='md:mx-0 mx-4 mb-8 mt-12'>
      <div className=''>
        <h1 className='text-center font-extrabold mb-3 mt-3'>Recruitment</h1>
        <h1 className='text-center text-2xl font-semibold mb-2'>Radically Better Hiring</h1>
        <h3 className='text-center text-sm text-gray-600'>Gobeze Consult is radically improving the hiring process for candidates, recruiters, and employers.</h3>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 mt-5'>
        {data.map(item => (
          <div key={item.id} className={item.id === 1 ? 'bg-black text-white pl-16 pr-8' : 'pl-14 pr-8'}>
            <h1 className='font-extrabold pt-5 text-3xl'>{item.title}</h1>
            <h1 className='font-extrabold text-3xl'>SERVICES</h1>
            <h1 className='pt-2 pb-14 font-semibold'>{item.title}</h1>
            <p className={`text-${item.id === 1 ? 'gray-400' : 'black'}`}>{item.description}</p>
            <button className={`border border-${item.button.color} text-${item.button.color} font-bold text-sm px-10 py-3 my-8`}>
              {item.button.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecruitmentJobMatch;
