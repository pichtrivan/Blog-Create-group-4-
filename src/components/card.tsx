// src/components/Card.tsx
import React from "react";
import { X, Facebook, Instagram } from "iconoir-react";

interface CardProps {
  image: string;
  title: string;
  name: string;
  role: string;
}

const Card: React.FC<CardProps> = ({ image, title, name, role }) => {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Card Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Name and Role */}
      <div className="p-4 text-center">
        <h5 className="text-xl font-semibold text-gray-900">{name}</h5>
        <p className="text-sm text-gray-500 mt-1">{role}</p>
        <p className="mt-2 text-base font-medium text-gray-800">{title}</p>
      </div>
      <div className="flex justify-center gap-3 pb-4">
        <button
          title="Close"
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>
        <button
          title="Facebook"
          className="p-2 rounded-full hover:bg-blue-100 transition"
        >
          <Facebook className="h-4 w-4 text-blue-600" />
        </button>
        <button
          title="Instagram"
          className="p-2 rounded-full hover:bg-pink-100 transition"
        >
          <Instagram className="h-4 w-4 text-pink-500" />
        </button>
      </div>
    </div>



  );
};

export default Card;


