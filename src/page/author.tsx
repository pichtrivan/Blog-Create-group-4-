import React from "react";
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
    "http://localhost:1337/api/blogs?filters[author][id][$eq]=4&populate=*"
  );

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Posts by <span className="text-blue-500">Author #4</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {authorLoading ? (
            <p className="text-center col-span-full">Loading author posts...</p>
          ) : authorError ? (
            <p className="text-center col-span-full text-red-500">
              Error: {authorError}
            </p>
          ) : (
            authorPosts?.map((post) => <Card key={post.id} post={post} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Author;
