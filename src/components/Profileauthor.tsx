import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./card";

interface Author {
  id: number;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  profession: string;
  userId: string;
  bio: string;
}

const ProfileAuthor: React.FC = () => {
  // Use `documentID` param now
  const { documentID } = useParams<{ documentID: string }>();
  console.log(documentID);

  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  console.log("blogs", blogs);
  useEffect(() => {
    if (!documentID) return;

    const fetchAuthor = async () => {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/blogs?populate[author][populate]=avatar&populate=image&filters[author][id][$eq]=${documentID}&sort=createdAt:desc`
        );

        const posts = res.data.data;
        console.log("sssssssssss", res.data);
        setBlogs(posts);

        if (posts.length > 0) {
          const authorData = posts[0].author || {};
          setAuthor({
            id: authorData.id,
            name: authorData.username || "Unknown",
            avatar:
              authorData.avatar?.url || "https://i.pravatar.cc/150?img=32",
            email: authorData.email || "No email",
            phone: authorData.phone || "123 456 7890",
            profession: authorData.profession || "Web Developer and Designer",
            userId: (authorData.username || "user").toLowerCase() + "123",
            bio: authorData.bio || "No bio available.",
            
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

  if (!author)
    return (
      <div className="text-center py-10 text-red-500">Author not found.</div>
    );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-40 h-40 rounded-full mx-auto object-cover"
      />
      <h1 className="text-3xl font-bold text-center mt-4">{author.name}</h1>
      <p className="text-center text-gray-600">{author.profession}</p>
      <p className="mt-4 text-gray-700">{author.bio}</p>

      <div className="mt-6 grid grid-cols-2 gap-4 text-gray-700">
        <div>
          <strong>Email:</strong> {author.email}
        </div>
        <div>
          <strong>Phone:</strong> {author.phone}
        </div>
        <div>
          <strong>User ID:</strong> {author.userId}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {blogs?.map((blog) => (
          <Card key={blog?.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default ProfileAuthor;
