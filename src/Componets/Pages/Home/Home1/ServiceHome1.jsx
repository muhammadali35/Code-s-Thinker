import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLaptopCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Hovimg from './../../../images/projects-2.png'
import Hovimg2 from './../../../images/projects-3.png'
import Hovimg3 from './../../../images/projects-4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const servicesData = [
  {
    icon: faCogs,
    title: 'Business Consulting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.',
    link: 'single-services.html',
    HovImg:Hovimg
  },
  {
    icon: faLaptopCode,
    title: 'Technology Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.',
    link: 'single-services.html',
    HovImg:Hovimg2
  },
  {
    icon: faGlobe,
    title: 'Digital Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.',
    link: 'single-services.html',
    HovImg:Hovimg3
  }
];

const ServiceHome1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 lg:px-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h6 className="text-lg font-medium text-gray-600">What We Do</h6>
            <h2 className="text-4xl font-bold">Our Services</h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 "  data-aos="fade-right">
        {servicesData.map((service, index) => (
  <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
    <div
      className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Background image and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 group-hover:opacity-100 opacity-0"
        style={{ backgroundImage: `url(${service.HovImg})` }} // Assuming bgImage is part of service data
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
      </div>
      <div className="relative z-10 mb-4">
        <FontAwesomeIcon icon={service.icon} className="text-4xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="relative z-10 text-2xl font-semibold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">{service.title}</h3>
      <p className="relative z-10 text-gray-600 mb-4 group-hover:text-white transition-colors duration-300">{service.description}</p>
      <div className="relative z-10">
        <a href={service.link} className="text-indigo-600 hover:underline group-hover:text-white transition-colors duration-300">
          Read More
        </a>
      </div>
    </div>
  </div>
))}


        </div>
        <div className="text-center mt-8">
          <Link to="view-service"  className="btn btn-primary bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700" >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default  ServiceHome1;