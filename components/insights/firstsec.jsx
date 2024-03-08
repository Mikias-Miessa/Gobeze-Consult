import React from 'react'
import SectionTitle from '../shared/sectionTitle';


function Firstsec() {
  return (
    <div
    className='bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center w-full overflow-hidden'
      style={{
        backgroundImage: `url("/images/insights/bgInsights.png")`,
      }}>
        <div>
        <SectionTitle className="text-5xl" title={'Insights'} color={'white'} />
        </div>
    </div>
  )
}

export default Firstsec;