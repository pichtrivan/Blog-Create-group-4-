import React from 'react';
import travelBg from '../assets/travel1.jpg';
import img1 from '../assets/blog1.jpg';
import img2 from '../assets/blog2.jpg';
import img3 from '../assets/blog3.jpg';
import img4 from '../assets/blog4.jpg';
import africaImg from '../assets/afirka.png';
import asiaImg from '../assets/cambodia.png';
import europeImg from '../assets/europe.png';
import middleEastImg from '../assets/middle.png';
import caribbeanImg from '../assets/carben.png';
import americasImg from '../assets/americas.png';
import startblog from '../assets/startblog.png';
import grow from '../assets/grow blog.png';
import takecourse from '../assets/take a course.png';
import Card from '../components/card';

interface SectionItem {
  name: string;
  image: string;
}

interface SectionWithImagesProps {
  title: string;
  items: SectionItem[];
}

const SectionWithImages: React.FC<SectionWithImagesProps> = ({ title, items }) => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative h-64 w-full rounded overflow-hidden group cursor-pointer shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
            <h3 className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl text-center">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  const latestPosts = [
    {
      image: img1,
      title: "Should You Start a Blog in 2025?",
      name: "Andrew Alexa",
      role: "Travel Blogger",
    },
    {
      image: img2,
      title: "Trip to Cabo San Lucas",
      name: "Maria Lopez",
      role: "Adventure Guide",
    },
    {
      image: img3,
      title: "10 Must-Have Website Features",
      name: "James King",
      role: "Web Designer",
    },
    {
      image: img4,
      title: "Profitable Online Course Ideas",
      name: "Linda Chen",
      role: "Educator & Coach",
    },
  ];

  const regions = [
    { name: "AFRICA", image: africaImg },
    { name: "ASIA", image: asiaImg },
    { name: "EUROPE", image: europeImg },
    { name: "MIDDLE EAST", image: middleEastImg },
    { name: "THE CARIBBEAN", image: caribbeanImg },
    { name: "THE AMERICAS", image: americasImg },
  ];

  const bloggerAdvice = [
    { name: "START A BLOG", image: startblog },
    { name: "GROW A BLOG", image: grow },
    { name: "TAKE A COURSE", image: takecourse },
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
              Welcome to <span className="text-blue-500">GlobeTrotter</span>
            </h1>
            <p className="text-base md:text-lg mb-6 font-bold">
              Embark on unforgettable journeys. Explore hidden gems, travel tips, and stories from around the world.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
          Start Exploring
        </button>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Our <span className="text-blue-500">Latest Posts</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {latestPosts.map((post, index) => (
              <Card key={index} image={post.image} title={post.title} name={post.name} role={post.role} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Destinations Section */}
      <SectionWithImages title="Where Do You Want To Go?" items={regions} />

      {/* Advice for Bloggers Section */}
      <SectionWithImages title="Advice for Bloggers" items={bloggerAdvice} />
    </div>
  );
};

export default Home;
