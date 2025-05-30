import React from "react";

interface CardProps {
  authorImage: string;  // Avatar image URL
  altText?: string;     // Optional alt text
}

const CardAuthor: React.FC<CardProps> = ({ authorImage, altText }) => {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <img
        src={authorImage}
        alt={altText || "Author avatar"}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CardAuthor;
