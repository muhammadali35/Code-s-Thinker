import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="about-area py-12 lg:px-16 font-serif">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center"  data-aos="fade-right">
          <div className="w-full lg:w-6/12 md:w-full">
            <div className="about-content">
              <h6 className="text-lg font-semibold text-gray-600">IT Solution Company</h6>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4">
                We Have 25 Years Of Experience Of Any Kind Technology’s & IT Solution
              </h2>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit velit.
              </p>
              <div className="skills mt-6">
                <div className="skill-item mb-4">
                  <h6 className="flex justify-between items-center">
                    IT Consulting <em className="text-gray-600">90%</em>
                  </h6>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h6 className="flex justify-between items-center">
                    Virtual Workstation <em className="text-gray-600">75%</em>
                  </h6>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h6 className="flex justify-between items-center">
                    Managed IT Service <em className="text-gray-600">80%</em>
                  </h6>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:ml-auto md:w-full mt-12 lg:mt-0">
            <div className="contact-section bg-[#4D02E0] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Free Consultation</h3>
              <div className="contact-form mt-6">
                <form id="contact-form" className="form" action="mail.php" method="POST">
                  <div className="space-y-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control w-full p-3 border border-gray-300 rounded"
                        required
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control w-full p-3 border border-gray-300 rounded"
                        required
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control w-full p-3 border border-gray-300 rounded"
                        required
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control w-full p-3 border border-gray-300 rounded"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary w-32 bg-blue-500 text-white py-3 rounded">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;