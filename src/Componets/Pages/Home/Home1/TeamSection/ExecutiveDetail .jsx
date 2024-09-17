import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import teamMembers from './teamMembers';
import ChatIcon from '../../../../ChatSystem/ChatIcon';


const ExecutiveDetail = () => {
  const { id } = useParams();
  const executive = teamMembers.find(member => member.id === Number(id));

  // Handle case where executive is not found
  if (!executive) {
    return <div>Executive not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white min-h-screen shadow-lg rounded-lg overflow-hidden font-serif mx-auto">
        <div className=' lg:flex justify-between '>
          <img
            src={executive.image}
            alt={executive.name}
            className="w-[25rem] h-[27rem] object-cover rounded-[50%]"
          />
          <div className="p-28 space-y-4 bg-white shadow-lg rounded-lg overflow-hidden h-[27rem]">
            <h2 className="text-2xl font-bold text-[#f8d022]">{executive.name}</h2>
            <p className="text-gray-600">Speciality: <span className='text-[#f8d022]'>{executive.role}</span></p>
            <p className="text-gray-800 mt-2">{executive.bio}</p>
            {executive.Experience && <p className="text-gray-600 mt-2">Experience: {executive.Experience}</p>}
            {executive.phone && <p className="text-gray-600 mt-2">Phone: {executive.phone}</p>}
            {executive.email && <p className="text-gray-600 mt-2">Email: {executive.email}</p>}
            <div className="flex mt-4">
              {/* Ensure properties exist before rendering */}
              {executive.socialLinks && (
                <>
                  {executive.socialLinks.twitter && (
                    <a href={executive.socialLinks.twitter} className="mx-2">
                      <FiTwitter />
                    </a>
                  )}
                  {executive.socialLinks.facebook && (
                    <a href={executive.socialLinks.facebook} className="mx-2">
                      <FaFacebook />
                    </a>
                  )}
                  {executive.socialLinks.linkedin && (
                    <a href={executive.socialLinks.linkedin} className="mx-2">
                      <FaLinkedin />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className='w-[90%] mx-auto mt-9 text-justify space-y-4'>
          <h1 className='text-2xl font-bold'>Personal Information</h1>
          <p className='font-thin'>{executive.personalinfo || 'Personal information not available'}</p>
        </div>
           <ChatIcon/>
        <div className='w-[90%] mx-auto flex justify-between mt-7'>
          <div>
            <h1>Skills</h1>
          </div>
          <div>
            <h1>Experience</h1>
          </div>
        </div>
          
      </div>
    </div>
  );
};

export default ExecutiveDetail;
