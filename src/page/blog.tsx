import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../components/blogcard";

// Define TypeScript interfaces
interface BlogAttributes {
  title: string;
  createdAt: string;
  readTime: string;
  image?: {
    url: string;
  };
}

interface BlogData {
  id: number;
  attributes: BlogAttributes;
}

interface ApiResponse {
  data: BlogData[];
}

interface Blog {
  title: string;
  date: string;
  readTime: string;
  image: string;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image&sort=createdAt:desc"
        );
        const apiData = response.data.data;
        console.log("API Data:", apiData);

        setBlogs(apiData);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Blogs</h2>
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center col-span-full">Loading blogs...</p>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                doccumentId={blog.documentId}
                key={blog.id}
                title={blog.title}
                date={new Date(blog.createdAt).toLocaleDateString()}
                readTime={blog.readTime}
                image={blog.image?.url}
                description={blog.tittle}
                authorName={blog.author?.username}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
