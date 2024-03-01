import React from 'react'
import Image from "next/image"
import Rectangle1 from "@/public/trainingAdSkill/rectangle1.png"
import Rectangle2 from "@/public/trainingAdSkill/rectangle2.png"
import Rectangle3 from "@/public/trainingAdSkill/rectangle3.png"
import Rectangle4 from "@/public/trainingAdSkill/rectangle4.png"
import Rectangle5 from "@/public/trainingAdSkill/rectangle5.png"
import Rectangle6 from "@/public/trainingAdSkill/rectangle6.png"

function SomeSection() {
  return (
    <div id='someSection' className='mx-28'>
        <div className='grid grid-cols-3 gap-0'>
          <div>
            <Image src={Rectangle1} alt='ImgTraining1'/>
          </div>
          <div>
          <Image src={Rectangle1} alt='ImgTraining1'/>
          </div>
          <div>
          <Image src={Rectangle1} alt='ImgTraining1'/>
          </div>            
        </div>
    </div>
  )
}

export default SomeSection;