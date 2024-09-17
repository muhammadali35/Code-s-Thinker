import React from 'react'
import PageTitle from '../Contact/PageTitle/PageTitle'
import AboutHome1 from '../Home/Home1/AboutHome1'
import WhyChooseUsHom1 from '../Home/Home1/WhyChooseUsHom1'
import FooterHome from '../Home/Home1/FooterHome/FooterHome'
import AboutSection from '../Home/Home2/AboutSectionHom2.jsx/AboutSectionhom2'
import CounterArea from '../Home/Home2/CounterArea/CounterArea'
import FaqSection from '../Home/Home2/FaqSection/FaqSection'

const About = () => {
  return (
    <>
      <PageTitle title="About Us"  Sub="About "/>
       <AboutHome1/>
        <WhyChooseUsHom1/>
         <AboutSection/>
          <CounterArea/>
           
           <FaqSection/>
        <FooterHome/>
    </>
  )
}

export default About
