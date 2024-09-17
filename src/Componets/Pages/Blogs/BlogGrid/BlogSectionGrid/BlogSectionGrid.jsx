import React from 'react';
import img1 from '../../../../images/blog-1.jpg';
import img2 from '../../../../images/blog-2.jpg';
import img3 from '../../../../images/blog-3.jpg';
import Arrow from '../Arrow/Arrow';
import BlogSectioData from '../../../Home/Home1/BlogSection/BlogSectioData';
import { Link } from 'react-router-dom';

const blogs = [
 
  {
    date: '20 January - 2024',
    category: 'Cyber Solutions',
    image: img1,
    title: 'How To Stop Cyber Criminals During This Global Pandemic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
    link: '#',
  },
  {
    date: '25 January - 2024',
    category: 'Digital Marketing',
    image: img2,
    title: 'The First Thing You Should Do If You Fall Victim To A Cyber Attack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
    link: '#',
  },
  {
    date: '30 January - 2024',
    category: 'Consulting',
    image: img3,
    title: '3 Things You Should Absolutely Demand From Your It Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
    link: '#',
  },
];

const BlogSectionGrid = () => {

  return (
    <section className="blog-area py-12 lg:px-16">
      <div className="container mx-auto">
      
   <BlogSectioData/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="single-blog bg-white shadow-lg  overflow-hidden">
              <div className="post-img">
                <Link href={blog.link}>
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                </Link>
              </div>
              <div className="p-6">
                <div className="blog-date text-sm text-gray-500 mb-2">
                  <ul className="flex items-center space-x-2">
                    <li>
                      <h6>{blog.date}</h6>
                    </li>
                    <li><span className="blog-inline-sep">|</span></li>
                    <li><a href="/" className="text-indigo-600">{blog.category}</a></li>
                  </ul>
                </div>
                <div className="blog-body-title mb-2">
                  <h3 className="text-xl font-semibold"><a href={blog.link}>{blog.title}</a></h3>
                </div>
                <div className="blog-body-text mb-4">
                  <p>{blog.description}</p>
                </div>
                <div className="blog-bottom-text-link">
                  <a href={blog.link} className="text-indigo-600 hover:text-indigo-400">+ Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
     <Arrow/>
      </div>
    </section>
  );
};

export default BlogSectionGrid;