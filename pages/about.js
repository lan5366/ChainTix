import React from 'react'
import Navbar from '@/components/Dashboard/Navbar'
import Footer from "@/components/LandingPage/Footer"
import AboutUs from '@/components/aboutus'

{/*
  about us page
  */}
const About = () => {
  return (
    <>
      <Navbar/>
      <AboutUs/>
      <Footer/>
    </>
    
  )
}

export default About