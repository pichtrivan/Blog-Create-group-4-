import React from 'react';
import RelatedBlogCard from './related-blog-card';

const blogs = [
  {
    image: '/images/blog1.jpg',
    title: 'Khnong Veal',
    date: 'Wed Jul 5 2023',
    readTime: '2 min',
  },
  {
    image: '/images/blog2.jpg',
    title: 'Best memories in Cardamom',
    date: 'Tue Oct 3 2023',
    readTime: '3 min',
  },
];

const RelatedBlogs: React.FC = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto px-4 py-8">
      <h3 className="text-md font-semibold mb-4">Related Blogs</h3>
      <div className="flex flex-wrap gap-4">
        {blogs.map((blog, idx) => (
          <RelatedBlogCard key={idx} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
