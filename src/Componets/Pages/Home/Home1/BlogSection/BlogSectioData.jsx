import React, { useEffect } from 'react'
import Blogimg1 from '../../../../images/blog-1.jpg';
import Blogimg2 from '../../../../images/blog-2.jpg';
import Blogimg3 from '../../../../images/blog-3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const BlogSectioData = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    const blogPosts = [
        {
          date: "20 January - 2024",
          category: "Technology",
          title: "What Could 5g Change About The Way We Use Technology?",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.",
          imgSrc: Blogimg1,
          link: "#"
        },
        {
          date: "25 January - 2024",
          category: "IT Services",
          title: "3 Factors To Consider When Choosing A Managed It Services",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.",
          imgSrc: Blogimg2,
          link: "#"
        },
        {
          date: "30 January - 2024",
          category: "Business",
          title: "How To Quickly Shift To A Work-from-home Business Model",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.",
          imgSrc: Blogimg3,
          link: "#"
        }
      ];
  return (
     <section className=' py-12'>
         <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-gray-600 text-sm font-semibold">Our Latest Blog</h6>
          <h2 className="text-3xl font-bold">News & Updates</h2>
        </div>
    <div className="flex flex-wrap -mx-4 justify-center" data-aos="fade-right">
          {blogPosts.map((post, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 p-4">
                <div className=" ">
                  <a href={post.link}>
                    <img className="w-full h-64 object-cover " src={post.imgSrc} alt={post.title} />
                  </a>
                </div>
              <div className="bg-white p-6  shadow-lg">
                <div className="">
                  <ul className="flex items-center text-gray-600 text-sm">
                    <li className="mr-4">
                      <h6>{post.date}</h6>
                    </li>
                    <li className="mx-2">|</li>
                    <li>
                      <a href="/" className="text-blue-500 hover:underline">{post.category}</a>
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    <a href={post.link} className="text-gray-800 hover:underline">{post.title}</a>
                  </h3>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">{post.description}</p>
                </div>
                <div>
                  <a href={post.link} className="text-blue-500 hover:underline">+ Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
         </div>
        </section>
  )
}

export default BlogSectioData
