import React from "react";

interface PostImage {
  url: string;
  alt?: string;
}

interface AuthorAvatar {
  url: string;
  alt?: string;
}

interface Author {
  avatar: AuthorAvatar;
  name?: string;
}

interface Post {
  image: PostImage;
  author: Author;
  title?: string;
  name?: string;
  createdAt?: string;
}

interface CardProps {
  post: Post;
}

const Cardauthor: React.FC<CardProps> = ({ post }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 ">
      <div className="w-36 h-36 rounded-full overflow-hidden shadow-md border border-gray-300">
        <img
          src={post.author.avatar.url}
          alt={post.author.avatar.alt || "Author avatar"}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-base font-semibold text-black leading-tight mt-2">
        {post.author.name}
      </p>
    </div>
  );
};

export default Cardauthor;
