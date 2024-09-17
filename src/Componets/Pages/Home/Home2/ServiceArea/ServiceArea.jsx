import React from "react";
import { FaCogs, FaDigitalTachograph, FaShieldAlt, FaCloud, FaDatabase } from "react-icons/fa"; 

const services = [
  {
    icon: <FaCogs className="text-4xl text-blue-500 group-hover:text-white" />,
    title: "Managed Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    link: "single-services.html"
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-500 group-hover:text-white" />,
    title: "Cyber Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    link: "single-services.html"
  },
  {
    icon: <FaDigitalTachograph className="text-4xl text-blue-500 group-hover:text-white" />,
    title: "Business Improvement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    link: "single-services.html"
  },
  {
    icon: <FaCloud className="text-4xl text-blue-500 group-hover:text-white" />,
    title: "Professional Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    link: "single-services.html"
  },
  {
    icon: <FaCogs className="text-4xl text-blue-500 group-hover:text-white" />,
    title: "Cloud Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    link: "single-services.html"
  },
  {
    icon: <FaDatabase className="text-4xl text-blue-500 group-hover:text-white" />,
    title: "Data Backup & Recovery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    link: "single-services.html"
  }
];

const ServicesArea = () => {
  return (
    <section className="services-area-2 pt-16 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
              <div className="single-services-box-2 p-6 border-b-4 border-transparent shadow-lg hover:border-blue-500 transition duration-300 group">
                <div className="services-icon-2 h-20 w-20 bg-gray-100 rounded-full group-hover:bg-blue-500 transition duration-300 flex items-center justify-center">
                  <span className="text-blue-500  transition duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="services-btn">
                  <a href={service.link} className="services-btn-one text-blue-500 hover:text-blue-700 transition duration-300">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;