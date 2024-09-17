import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const FooterHome = () => {
  return (
    <>
      <section className="bg-[#1D1F34] text-white py-12 px-16 font-serif">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* About Us Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-about">
                <a className="footer-logo" href="/">
                  <img src="assets/img/logo.png" alt="logo" className="w-40" />
                </a>
                <p className="mt-4 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur.
                </p>
                <ul className="flex mt-4 space-x-4">
                  <li>
                    <a href="/" className=" hover:text-white">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="/" className=" hover:text-white">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/" className=" hover:text-white">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="/" className=" hover:text-white">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Company Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4">Company</h5>
                <ul className="">
                  <li><a href="about.html" className="hover:text-white">About Us</a></li>
                  <li><a href="projects.html" className="hover:text-white">Latest Project</a></li>
                  <li><a href="services.html" className="hover:text-white">IT Solutions</a></li>
                  <li><a href="services.html" className="hover:text-white">Digital Solutions</a></li>
                  <li><a href="team.html" className="hover:text-white">Team Member</a></li>
                  <li><a href="contact.html" className="hover:text-white">Contact Us</a></li>
                </ul>
              </div>
            </div>
            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="footer-list  ">
                <h5 className="text-lg font-semibold mb-4">Services</h5>
                <ul className="">
                  <li><a href="/" className="hover:text-white">IT Strategy</a></li>
                  <li><a href="/" className="hover:text-white">Network Services</a></li>
                  <li><a href="/" className="hover:text-white">Software Audits</a></li>
                  <li><a href="/" className="hover:text-white">Business Intelligence</a></li>
                  <li><a href="/" className="hover:text-white">Data Science</a></li>
                  <li><a href="/" className="hover:text-white">Virtual Workstation</a></li>
                </ul>
              </div>
            </div>
            {/* Contact Info Section */}
            <div className="lg:w-1/4 md:w-1/2 px-4">
              <div className="footer-list">
                <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
                <ul className=" mb-4">
                  <li><span className="font-semibold">Address:</span> 526 Melrose Street, Water Mill, New York.</li>
                  <li><span className="font-semibold">Phone:</span> <a href="tel:080707555321" className="hover:text-white">+080 707 555-321</a></li>
                  <li><span className="font-semibold">Email:</span> <a href="mailto:random@example.com" className="hover:text-white">contact-info@example.com</a></li>
                </ul>
                <div className="footer-info-newsletter">
                  <form className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      className="flex-1 px-4 py-2 mb-2 sm:mb-0 border border-gray-600 rounded-md  text-white "
                      placeholder="Enter your email"
                      name="EMAIL"
                      required=""
                      autoComplete="off"
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Copyright Section */}
      <div className="  py-7">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-sm">
              <p>© 2024 - All Rights Reserved - Designed by <span className="font-semibold"> Muhammad Ali @Wali Haider jalali</span></p>
            </div>
            <ul className="flex space-x-4 text-sm">
              <li><a href="terms-condition.html" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="privacy-policy.html" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterHome;