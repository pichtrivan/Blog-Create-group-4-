import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./card";

interface Author {
  id: number;
  name: string;
  avatar: string;
  email: string;
  profession: string;
  userId: string;
}

const ProfileAuthor: React.FC = () => {
  const { documentID } = useParams<{ documentID: string }>();
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (!documentID) return;

    const fetchAuthor = async () => {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image&filters[author][id][$eq]=${documentID}&sort=createdAt:desc`
        );

        const posts = res.data.data;
        setBlogs(posts);

        if (posts.length > 0) {
          const authorData = posts[0].author || {};
          setAuthor({
            id: authorData.id,
            name: authorData.username || "Unknown",
            avatar:
              authorData.avatar?.url || "https://i.pravatar.cc/150?img=32",
            email: authorData.email || "No email",
            profession: authorData.profession || "Web Developer",
            userId: (authorData.username || "user").toLowerCase() + "123",
          });
        } else {
          setAuthor(null);
        }

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch author:", error);
        setLoading(false);
      }
    };

    fetchAuthor();
  }, [documentID]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!author) return <div className="text-center py-10 text-red-500">Author not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 rounded-lg">
      {/* Left Sidebar */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center mt-20">
        <img src={author.avatar} alt={author.name} className="w-32 h-32 mx-auto rounded-full" />
        <h2 className="mt-4 text-xl font-bold">{author.name}</h2>
        <p className="text-sm text-gray-600">{author.profession}</p>
       
        <div className="flex justify-center gap-3 mt-4">
          <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Follow</button>
          <button className="bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400">Message</button>
        </div>

        {/* Social Links */}
        <ul className="mt-6 text-left space-y-2 text-sm text-gray-700">
          <li><strong>Website:</strong> https://bootdey.com</li>
          <li><strong>Github:</strong> bootdey</li>
          <li><strong>Twitter:</strong> @bootdey</li>
          <li><strong>Instagram:</strong> bootdey</li>
          <li><strong>Facebook:</strong> bootdey</li>
        </ul>
      </div>

      {/* Right Panel - Personal Info */}
      <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2 mt-20">
        <h3 className="text-lg font-semibold mb-4">Profile Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div><strong>Full Name:</strong> {author.name}</div>
          <div><strong>Email:</strong> {author.email}</div>
          <div><strong>Phone:</strong> (239) 816-9029</div>
          <div><strong>Mobile:</strong> (320) 380-4539</div>
          <div><strong>Address:</strong> Bay Area, San Francisco, CA</div>
        </div>
        <button className="mt-6 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">Edit</button>
      </div>

      {/* Project Status */}
     
      {/* Blog Posts */}
      <div className="md:col-span-3 mt-8">
        <h3 className="text-xl font-bold mb-4">Author's Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Card key={blog?.id} post={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileAuthor;
