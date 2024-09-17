import React from 'react'
import blog1 from './../../../images/blog-3.jpg'
import Arrow from '../BlogGrid/Arrow/Arrow';
// import FooterHome from '../../Home/Home1/FooterHome/FooterHome';

const BlogAreaRightData = () => {
    const blogPosts = [
        {
          id: 1,
          date: '20 January - 2024',
          category: 'Technology',
          title: 'What Could 5g Change About The Way We Use Technology?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
          image: blog1,
        },
        {
          id: 2,
          date: '25 January - 2024',
          category: 'IT Services',
          title: '3 Factors To Consider When Choosing A Managed IT Services',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
          image: blog1,
        },
        {
          id: 3,
          date: '30 January - 2024',
          category: 'Business',
          title: 'How To Quickly Shift To A Work-from-home Business Model',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
          image: blog1,
        },
        {
          id: 4,
          date: '20 January - 2024',
          category: 'Cyber Solutions',
          title: 'How To Stop Cyber Criminals During This Global Pandemic',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
          image: blog1,
        },
        {
          id: 5,
          date: '25 January - 2024',
          category: 'Digital Marketing',
          title: 'The First Thing You Should Do If You Fall Victim To A Cyber Attack',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
          image: blog1,
        },
        {
          id: 6,
          date: '30 January - 2024',
          category: 'Consulting',
          title: '3 Things You Should Absolutely Demand From Your IT Services',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.',
          image: blog1,
        },
      ];
      
  return (
  <>
    <div className="flex flex-wrap -mx-4">
    {blogPosts.map((post) => (
      <div key={post.id} className="lg:w-1/2  w-full px-4 mb-8">
        <div className="single-blog bg-white  shadow-lg">
          <div className="post-img mb-4">
            <a href="/">
              <img src={post.image} alt="" className="w-full h-48 object-cover  " />
            </a>
          </div>
          <div className="blog-content p-6">
            <div className="blog-date mb-2">
              <ul className="flex items-center space-x-2 text-gray-500 text-sm">
                <li>
                  <h6>{post.date}</h6>
                </li>
                <li>|</li>
                <li>
                  <a href="/" className="text-blue-500 hover:underline">{post.category}</a>
                </li>
              </ul>
            </div>
            <div className="blog-body-title mb-2">
              <h3 className="text-xl font-semibold">
                <a href="/" className="hover:underline">{post.title}</a>
              </h3>
            </div>
            <div className="blog-body-text mb-4">
              <p>{post.description}</p>
            </div>
            <div className="blog-bottom-text-link">
              <a href="/" className="text-blue-500 hover:underline">+ Read More</a>
            </div>
          </div>
        </div>
      </div>
    ))}
     <div className='lg:ml-28'>
     <Arrow/>
     </div>
   
  </div>
  </>
  )
}

export default BlogAreaRightData
