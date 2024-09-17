import React from 'react'
import PageTitle from './PageTitle/PageTitle'
import ContactForm from './ContactForm/ContactForm'
import FooterHome from '../Home/Home1/FooterHome/FooterHome'

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact Us" Sub="Contact"/>
      <ContactForm/>
       <FooterHome/>
    </>
  )
}

export default Contact
