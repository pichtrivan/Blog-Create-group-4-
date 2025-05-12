import React from 'react';

interface CardProps {
  image: string;
  title: string;
  name: string;
  role: string;
  authorImage: string;
}

const Card: React.FC<CardProps> = ({ image, title, name, role, authorImage }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        {/* Role */}
        <p className="text-gray-500 mb-2">{role}</p>
        
        {/* Author Info */}
        <div className="flex items-center mt-4">
          {/* Author Image */}
          <img
            src={authorImage}
            alt={name}
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
          
          {/* Author Name */}
          <span className="ml-3 text-sm font-medium">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
