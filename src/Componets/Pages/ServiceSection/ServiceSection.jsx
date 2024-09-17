import React from 'react'
import PageTitle from '../Contact/PageTitle/PageTitle'
import ServicItem from './ServiceItem/ServiceItem'
import FooterHome from '../Home/Home1/FooterHome/FooterHome'
import ServicesCategory from '../Home/Home2/ServiceCategory/ServiceCategory'
import WorkProcess from '../Home/Home2/WorkProcces/WorkProcces'
const ServiceSection = () => {
  return (
    <>
     <PageTitle title="Our Services "  Sub="Services"/> 
     <ServicItem/>
      <WorkProcess/>
      <ServicesCategory/>
     <FooterHome/>
     
    </>
  )
}

export default ServiceSection
