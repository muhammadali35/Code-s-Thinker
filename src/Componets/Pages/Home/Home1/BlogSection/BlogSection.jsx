import React from 'react';
import BlogSectioData from './BlogSectioData';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <section className="bg-gray-100 py-12">
        <div>
           <BlogSectioData/>
        <div className="text-center mt-12">
          <Link to=""className="bg-blue-500 text-white py-2 px-6 rounded-md mr-4 hover:bg-blue-600">Get Free Quote</Link>
          <Link to="/view" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">View All Blog</Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;