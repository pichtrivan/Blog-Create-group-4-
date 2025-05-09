import React from 'react';
import travelBg from '../assets/travel1.jpg';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';

const Home: React.FC = () => {
  const blogPosts = [
    {
      title: 'Should You Start a Blog in 2025?',
      image: blog1,
      alt: 'Blogging in 2025',
    },
    {
      title: 'How To Plan A Trip To Cabo San Lucas',
      image: blog2,
      alt: 'Trip to Cabo San Lucas',
    },
    {
      title: 'What Makes A Good Website: 10 Must-Have Features',
      image: blog3,
      alt: 'Good Website Features',
    },
    {
      title: '10 Profitable Online Course Ideas for 2025',
      image: blog4,
      alt: 'Online Course Ideas',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="h-screen w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${travelBg})` }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight mt-20">
              Welcome to <span className="text-yellow-400">GlobeTrotter</span>
            </h1>
            <p className="text-base md:text-lg mb-6 font-bold">
              Embark on unforgettable journeys. Explore hidden gems, travel tips, and stories from around the world.
            </p>
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition">
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Our <span className="text-blue-500 font-bold">Latest Posts</span>
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="relative h-72 rounded-xl overflow-hidden shadow-md group cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                  <h3 className="text-white text-lg font-semibold text-center leading-tight drop-shadow-md">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
