import { AboutSection } from '@/pages/About/About'
import { ContactSection } from '@/pages/Contact/Contact'
import { CardDemo } from '@/pages/experience/Experience'
import { HeroSection } from '@/pages/HeroSection/Hero'
import { ProjectsSection } from '@/pages/Projects/Projects'
import { SkillsSection } from '@/pages/Skills/Skills'
import React from 'react'

const MainComponents = () => {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <CardDemo />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    </>
  )
}

export default MainComponents