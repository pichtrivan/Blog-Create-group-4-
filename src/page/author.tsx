import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link from react-router-dom
import Card from "../components/cardauthor";
import useFetch from "../hook/useFetch";

interface BlogPost {
  id: number;
  attributes: {
    title: string;
    authorName: string;
    authorRole: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const Author: React.FC = () => {
  const {
    data: authorPosts,
    loading: authorLoading,
    error: authorError,
  } = useFetch<BlogPost[]>(
    "http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image&sort=createdAt:desc"
  );

  console.log(authorPosts);

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Posts by <span className="text-blue-500">Author</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {authorLoading ? (
            <p className="text-center col-span-full">Loading author posts...</p>
          ) : authorError ? (
            <p className="text-center col-span-full text-red-500">
              Error: {authorError}
            </p>
          ) : (
            authorPosts?.map((post) => (
              <Link key={post.id} to={`/author/${post.author?.id}`}>
                <Card post={post} />
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Author;
