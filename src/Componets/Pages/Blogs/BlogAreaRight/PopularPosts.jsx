import React from 'react'
import blog1 from '../../../images/blog-1.jpg'
const PopularPosts = () => {
    const popularPosts = [
        {
          id: 1,
          date: "January 10, 2024",
          title: "3 Factors To Consider When Choosing A Managed IT Services",
          imageClass: blog1,
        },
        {
          id: 2,
          date: "January 15, 2024",
          title: "How To Quickly Shift To A Work-from-home Business Model",
          imageClass: blog1,
        },
        {
          id: 3,
          date: "January 25, 2024",
          title: "What Could 5g Change About The Way We Use Technology?",
          imageClass: blog1,
        },
      ];
  return (
    <section className="widget widget_techSoft_posts_thumb mb-8">
    <h3 className="widget-title text-2xl font-semibold mb-4">
      Popular Posts
    </h3>
    <div className=" bg-gray-200 rounded-full h-[2px] mb-4">
        <div className="bg-blue-500 h-[2px] rounded-full" style={{ width: "25%" }}></div>
      </div>
    {popularPosts.map((post) => (
      <article
        key={post.id}
        className="item flex items-center mb-4"
      >
        <img src={post.imageClass} alt="/no img" className="w-1/4 block  h-16 rounded-lg bg-gray-300" />
        <div className="info w-3/4 ml-4">
          <span className="text-sm text-gray-500">{post.date}</span>
          <h4 className="title usmall   font-semibold text-[15px] hover:text-blue-600">
            {post.title}
          </h4>
        </div>
      </article>
    ))}
  </section>
  )
}

export default PopularPosts
