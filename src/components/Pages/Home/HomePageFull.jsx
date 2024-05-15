import React from 'react'

/* Importing the good stuff */
import HomePageNav from './HomePageNav'
import HeroSection from './Hero'
import SkillCards from './SkillCard'
import AboutMe from './AboutMe'
import SkillShowcase from './SkillShowcase'
import ExperienceShowcase from './ExperienceShowcase'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import FAQ from './FAQ'
import ResumeDownload from './ResumeDownload'
import Guarantee from './Guarantee'


function HomePageFull() {
  return (
    <>

    <HomePageNav />
    <HeroSection/>
    <SkillCards />
    <AboutMe />
    <SkillShowcase />
    <ExperienceShowcase />
    <Testimonials />
    <CallToAction />
    <FAQ />
    <ResumeDownload id="down"/>
    <Guarantee />
      
    </>
  )
}

export default HomePageFull
