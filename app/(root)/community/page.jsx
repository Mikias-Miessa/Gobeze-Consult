import React from 'react'
import Community from '@/components/community/community'
import Education from '@/components/community/education'
import SocialSupport from "@/components/community/social_support"
import Health from '@/components/community/health'

const page = () => {
  return (
    <div>
      <Community />
      <Education />
      <Health/>
      <SocialSupport/>
    </div>
  )
}

export default page
