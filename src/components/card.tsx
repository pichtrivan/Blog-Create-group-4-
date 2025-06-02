import React from "react";
import { X, ThumbsUp, ThumbsDown, ChatBubble } from "iconoir-react";
import { Link } from "react-router-dom"; // Make sure this is imported

interface CardProps {
  post: {
    id: string; // Added this field
    image: {
      url: string;
      alt?: string;
    };
    title: string;
    author: {
      username: string;
      avatar: {
        url: string;
      };
    };
    createdAt: string;
  };
  onClose?: () => void;
  onLike?: () => void;
  onDislike?: () => void;
  onComment?: () => void;
}

const Card: React.FC<CardProps> = ({
  post,
  onClose,
  onLike,
  onDislike,
  onComment,
}) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="w-full sm:max-w-md bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={post.image.url}
          alt={post.image.alt || post.title}
          className="w-full h-52 object-cover"
          loading="lazy"
        />
        {onClose && (
          <button
            className="absolute top-2 right-2 p-2 bg-white/90 rounded-full shadow hover:bg-white transition"
            aria-label="Close"
            onClick={onClose}
          >
            <X className="w-4 h-4 text-gray-700" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
        <div className="flex items-center space-x-3 text-sm text-gray-500">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={post.author.avatar.url}
            alt={post.author.username}
          />
          <div>
            <p>By {post.author.username}</p>
            <p>{formatDate(post.createdAt)}</p>
            <Link
              to={`/blog-detail/${post.id}`}
              className="text-blue-500 hover:underline text-sm"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 text-gray-600">
        <div className="flex gap-4">
          <button
            onClick={onLike}
            className="flex items-center gap-1 hover:text-blue-600 transition"
            aria-label="Like"
          >
            <ThumbsUp className="w-5 h-5" />
            <span className="text-sm">Like</span>
          </button>

          <button
            onClick={onDislike}
            className="flex items-center gap-1 hover:text-red-500 transition"
            aria-label="Dislike"
          >
            <ThumbsDown className="w-5 h-5" />
            <span className="text-sm">Dislike</span>
          </button>

          <button
            onClick={onComment}
            className="flex items-center gap-1 hover:text-green-600 transition"
            aria-label="Comment"
          >
            <ChatBubble className="w-5 h-5" />
            <span className="text-sm">Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
