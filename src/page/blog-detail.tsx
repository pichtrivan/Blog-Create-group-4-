import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<{
    title?: string;
    author?: string;
    content?: string;
    image?: string;
  } | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs/${id}`
        );
        console.log(true);
        setPost(response.data?.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        console.log("false");
      }
    };

    fetchPost();
  }, [id]);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-center ">
      <h1 className="text-2xl font-bold mt-10 "></h1>
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          <br />
        </p>
        <h2 className="text-xl font-semibold mt-6">{post?.title}</h2>
        {post?.image && (
          <img
            src={post.image}
            alt={post.title || "Blog image"}
            className="w-full h-48 object-cover"
          />
        )}

        <div>{post?.content ? <p>{post.content}</p> : null}</div>
      </div>
    </section>
  );
};

export default BlogDetail;
