import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ct from './../images/code.png';
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white h-20 sticky z-40 top-0 shadow-md">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto h-full px-4 font-serif">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/logo">
            <img src={ct} alt="Codes Thinker Logo" className="h-16 w-20" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center text-black hover:text-red-700 focus:text-[#f0db1b]" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navigation Items */}
        <div className={`flex-grow flex items-center ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center relative`}>
          <ul className={`flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-4 absolute md:static bg-white md:bg-transparent w-full md:w-auto ${isOpen ? 'top-10' : ''} md:top-0 px-4 md:px-0`}>
            {/* Home Menu */}
            <li className="relative group">
              <Link to="/home" className="nav-link flex items-center text-black py-2 md:py-0 hover:text-[#5764ec] hover:border-b-2 border-[#f8d022]">
                Home
              </Link>
            
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg z-50 w-56">
                <li>
                  <Link to="/home1" className="nav-link block text-black px-4 py-2 hover:text-[#5764ec]">Home 1</Link>
                </li>
                <hr />
                <li>
                  <Link to="/home2" className="nav-link block px-4 py-2 hover:text-[#5764ec]">Home 2</Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link to="/about" className="nav-link flex items-center text-black py-2 md:py-0 hover:text-[#5764ec] hover:border-b-2 border-[#f8d022]">
                About Us
              </Link>
              
            </li>
            {/* Service Menu */}
            <li className="relative group">
              <Link to="/services" className="nav-link flex items-center text-black py-2 md:py-0 hover:text-[#5764ec] hover:border-b-2 border-[#f8d022]">
                Service
              </Link>
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg z-50 w-56">
                <li>
                  <Link to="/home1" className="nav-link block text-black px-4 py-2 hover:text-[#5764ec]">Service 1</Link>
                </li>
                <hr />
                <li>
                  <Link to="/home2" className="nav-link block px-4 py-2 hover:text-[#5764ec]">Service 2</Link>
                </li>
              </ul>
            </li>
            {/* Project Menu */}
            <li className="relative group">
              <Link to="/project" className="nav-link flex items-center text-black py-2 md:py-0 hover:text-[#5764ec] hover:border-b-2 border-[#f8d022]">
                Project
              </Link>
            </li>
            {/* Pages Menu */}
            <li className="relative group">
              <Link to="/" className="nav-link flex items-center text-black py-2 md:py-0 hover:text-[#5764ec] hover:border-b-2 border-[#f8d022]">
                Pages
              </Link>
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg z-50 w-56">
                <li>
                  <Link to="/team" className="nav-link block text-black px-4 py-2 hover:text-[#5764ec]">Team</Link>
                </li>
                <hr />
                <li>
                  <Link to="/testimonials" className="nav-link block px-4 py-2 hover:text-[#5764ec]">Testimonials</Link>
                </li>
                <hr />
                <li>
                  <Link to="/pricing-plans" className="nav-link block px-4 py-2 hover:text-[#5764ec]">Pricing Plans</Link>
                </li>
                <hr />
                <li>
                  <Link to="/faq" className="nav-link block px-4 py-2 hover:text-[#5764ec]">FAQ</Link>
                </li>
              </ul>
            </li>
            {/* Blogs Menu */}
            <li className="relative group">
              <Link to="/" className="nav-link flex items-center text-black py-2 md:py-0 hover:text-[#5764ec] hover:border-b-2 border-[#f8d022]">
                Blogs
              </Link>
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg z-50 w-56">
                <li>
                  <Link to="/blogs-right-sidebar" className="nav-link block px-4 py-2 hover:text-[#5764ec]">Blogs Right Sidebar</Link>
                </li>
              </ul>
            </li>
            {/* Contact Menu */}
            <li className="relative group">
              <Link to="/contact" className="nav-link flex items-center text-black py-2 md:py-0 hover:text-[#5764ec] hover:border-b-2 border-[#f8d022]">
                Contact
              </Link>
            </li>
            {/* About Us Menu */}
          
          </ul>
        </div>

        {/* Join Us Button */}
      
        <div className="flex-shrink-0 hidden md:block">
          <button className="bg-[#5764ec] text-white px-6 py-2 text-lg rounded-lg ">Join Us</button>
        </div>
        {/* Mobile Search Icon */}
        {/* <div className='md:hidden flex items-center text-black'>
          <IoSearch size={22} />
        </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
