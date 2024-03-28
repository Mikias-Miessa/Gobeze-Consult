import React from 'react'
import Community from '@/components/community/community'
import Education from '@/components/community/education'
import SocialSupport from "@/components/community/social_support"
import Health from '@/components/community/health'
import Startup from '@/components/community/startup'

const page = () => {
  return (
    <div>
      <Community />
      <Startup />
      <Education />
      <Health />
      <SocialSupport />
    </div>
  )
}

export default page
