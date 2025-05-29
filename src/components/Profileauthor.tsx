import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileAuthor = () => {
  const [author, setAuthor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/users?populate=*');
        const user = res.data[0]; 
        setAuthor({
          name: user.username,
          avatar: user.avatar?.url || 'https://i.pravatar.cc/150?img=32',
          bio: user.bio || 'No bio available.',
          social: {
            twitter: user.twitter || '#',
            instagram: user.instagram || '#',
          },
          posts: user.posts || [], // Ensure `posts` is populated in Strapi
        });
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch author:', error);
        setLoading(false);
      }
    };

    fetchAuthor();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!author) {
    return <div className="text-center py-10 text-red-500">Author not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Author Profile */}
      <div className="flex flex-col items-center text-center">
        <img src={author.avatar} alt={author.name} className="w-32 h-32 rounded-full shadow-lg mb-4" />
        <h1 className="text-3xl font-bold">{author.name}</h1>
        <p className="text-gray-600 max-w-xl mt-2">{author.bio}</p>
        <div className="flex gap-4 mt-4">
          <a href={author.social.twitter} target="_blank" className="text-blue-500 hover:underline">Twitter</a>
          <a href={author.social.instagram} target="_blank" className="text-pink-500 hover:underline">Instagram</a>
        </div>
      </div>

      {/* Posts by Author */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Posts by {author.name}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {author.posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          author.posts.map((post: any) => (
            <div key={post.id} className="bg-white rounded-xl shadow hover:shadow-md transition p-4">
              <img src={post.image?.url || 'https://via.placeholder.com/400x250'} alt={post.title} className="rounded-lg mb-3" />
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600 mt-1">{post.excerpt}</p>
              <p className="text-sm text-gray-400 mt-2">{new Date(post.publishedAt).toDateString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfileAuthor;
