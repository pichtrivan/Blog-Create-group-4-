import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  readTime: string;
  image: string;
  description: string;
  authorName: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  readTime,
  image,
  description,
  authorName,
  doccumentId,
}) => {
  return (
    <div className=" mt-8">
      <div className="bg-white rounded-2xl  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-sm text-gray-500">
            {date} • {readTime}
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-2">{title}</h3>
          <p className="text-gray-600 font-bold mt-2">{description}</p>
          <p className="text-sm text-gray-500 mt-1">By {authorName}</p>
          <Link to={`/blog-detail/${doccumentId}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
