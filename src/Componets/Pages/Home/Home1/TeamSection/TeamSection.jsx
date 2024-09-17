import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import teamMembers from "./teamMembers";
import { Link } from "react-router-dom";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";



import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="py-16 lg:px-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-lg text-gray-600">Our Leadership</h6>
          <h2 className="text-4xl font-bold">Team Members</h2>
        </div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full   lg:w-1/4 md:w-1/2 px-4 mb-8">
                   <Link to={`/executive/${member.id}`}>
              <div className="relative h-72 bg-white rounded-lg shadow-md overflow-hidden border-dotted border-3 border-blue-600">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full  object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-4 flex justify-center space-x-3">
                      {/* <a href={member.socialLinks.facebook}>
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="text-xl"
                        />
                      </a>
                      <a href={member.socialLinks.twitter}>
                        <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                      </a>
                      <a href={member.socialLinks.linkedin}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="text-xl"
                        />
                      </a> */}
                    </div>
                    <h3 className="text-2xl mb-2">{member.name}</h3>
                    <span className="text-lg">{member.role}</span>
                    <span className="text-lg">{member.work}</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 ">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <span className="text-blue-600 text-xm">{member.role}</span>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;