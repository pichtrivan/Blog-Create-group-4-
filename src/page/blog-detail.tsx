import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import KohKongKraoDetailSection from "../assets/afirka.png"; // ✅ this must be a React component

interface BlogDetail {
  id: number;
  attributes: {
    title: string;
    content: string;
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

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data,
    loading,
    error,
  } = useFetch<{ data: BlogDetail }>(
    `http://localhost:1337/api/blogs/${id}?populate=image`
  );

  const blog = data?.data;
  console.log (data,"..auto..,.")

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {blog && (
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.attributes.title}</h1>
          <p className="mb-2 text-gray-500">
            By {blog.attributes.authorName} - {blog.attributes.authorRole}
          </p>
          <img
            src={blog.attributes.image.data.attributes.url}
            alt={blog.attributes.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <div className="prose max-w-none mb-12">
            <p>{blog.attributes.content}</p>
          </div>

          {/* Conditionally render extra section */}
          {blog.attributes.title.toLowerCase().includes("koh kong krao") && (
            <KohKongKraoDetailSection />
          )}
        </>
      )}
    </div>
  );
};

export default BlogDetail;
