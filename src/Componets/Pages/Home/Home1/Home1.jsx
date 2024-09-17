import React from 'react'
// import Wellcome from './Wellcome'
// import ServiceHome1 from './ServiceHome1'
import AboutHome1 from './AboutHome1'
import WhyChooseUsHom1 from './WhyChooseUsHom1'
import ProjectHom1 from './ProjectHom1'
import TeamSection from './TeamSection/TeamSection'
import Testimonial from './Testimonial/Testimonial'
import BlogSection from './BlogSection/BlogSection'
import ConsultationSection from './Consultation/ConsultationSection'
import FooterHome from './FooterHome/FooterHome'
import ProjectHome2 from '../Home2/Projecthom2/ProjectHome2'
import Swiiper from './Swipper/Swiiper'
import ServicItem from '../../ServiceSection/ServiceItem/ServiceItem'
const Home1 = () => {
  return (
    <>
      <Swiiper/>
      <ServicItem/>
      <AboutHome1/>
      <WhyChooseUsHom1/>
      <ProjectHom1/>
        <ProjectHome2/>
       <TeamSection/>
       <Testimonial/>
       <BlogSection/>
       <ConsultationSection/>
        <FooterHome/>
       
    </>
  )
}

export default Home1
