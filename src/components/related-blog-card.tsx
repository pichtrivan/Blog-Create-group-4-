import React from "react";

interface Props {
  image: string;
  title: string;
  date: string;
  readTime: string;
}

const RelatedBlogCard: React.FC<Props> = ({ image, title, date, readTime }) => {
  return (
    <div className="w-full max-w-xs bg-white shadow rounded p-2">
      <img
        src={image}
        alt={title}
        className="rounded h-40 object-cover w-full"
      />
      <h4 className="mt-2 text-sm font-semibold">{title}</h4>
      <p className="text-xs text-gray-500">
        {date} · {readTime} read
      </p>
    </div>
  );
};

export default RelatedBlogCard;
