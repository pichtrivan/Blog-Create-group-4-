import React from "react";
import {
  X,
  ThumbsUp,
  ThumbsDown,
  ChatBubble,
} from "iconoir-react";

interface CardProps {
  post: {
    image: {
      url: string;
      alt?: string;
    };
    title: string;
    name: string;
    createdAt: string;
  };
  onClose?: () => void;
  onLike?: () => void;
  onDislike?: () => void;
  onComment?: () => void;
}

const Cardauthor: React.FC<CardProps> = ({
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
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200">
      {/* Image */}
      <div className="relative">
        <img
          src={post.image?.url || "https://via.placeholder.com/400x200?text=No+Image"}
          alt={post.image?.alt || post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {post.title}
        </h2>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p className="font-medium">By {post.name}</p>
          <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
            {formatDate(post.createdAt)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100 text-sm text-gray-600">
        <div className="flex gap-4">
          <button
            onClick={onLike}
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <ThumbsUp className="w-4 h-4" />
            Like
          </button>
          <button
            onClick={onDislike}
            className="flex items-center gap-1 hover:text-red-500 transition"
          >
            <ThumbsDown className="w-4 h-4" />
            Dislike
          </button>
          <button
            onClick={onComment}
            className="flex items-center gap-1 hover:text-green-600 transition"
          >
            <ChatBubble className="w-4 h-4" />
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardauthor;
