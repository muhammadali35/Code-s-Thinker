import React, { useEffect } from 'react';
import work1 from '../../../images/work-1.jpg'
import work2 from '../../../images/work-2.jpg'
import work3 from '../../../images/work-3.jpg'
import work4 from '../../../images/work-4.jpg'
import work5 from '../../../images/work-5.jpg'
import work6 from '../../../images/work-6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const projectData = [
  {
    image: work1,
    title: 'Insurance IT Solutions',
    link: '#'
  },
  {
    image: work2,
    title: 'IT Services',
    link: '#'
  },
  {
    image: work3,
    title: 'Business Intelligence',
    link: '#'
  },
  {
    image: work4,
    title: 'IT Consulting',
    link: '#'
  },
  {
    image: work5,
    title: 'Managed Analytics',
    link: '#'
  },
  {
    image: work6,
    title: 'Data Security',
    link: '#'
  }
];

const ProjectHom1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="project" className="bg-gray-100 py-16 lg:px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-lg text-gray-600">Featured Works</h6>
          <h2 className="text-4xl font-bold">Case Studies</h2>
        </div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {projectData.map((project, index) => (
            <div key={index} className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
              <div className="relative group">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <div className="text-center text-white">
                    <h3 className="text-2xl mb-2">
                      <a href={project.link} className="hover:underline">{project.title}</a>
                    </h3>
                    <a href={project.link} className="text-lg underline">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a className="btn btn-primary bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700" href="#0">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectHom1