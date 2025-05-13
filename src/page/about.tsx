import React from 'react';
import aboutimg from '../assets/about-img.png';

interface Post {
  title: string;
  excerpt: string;
  link: string;
}

const examplePosts: Post[] = [
  {
    title: 'Start with your airport.',
    excerpt: 'Choose US departure airports like your biggest airport, closest airport, and maybe even your parent’s.',
    link: '/blog/future-of-web-dev',
  },
  {
    title: 'Watch the deals roll in.',
    excerpt: 'We keep a close eye on airfare to over 900 destinations around the world. When the prices drop, you know.',
    link: '/blog/mastering-react-hooks',
  },
  {
    title: "Then book it.",
    excerpt: 'With flight details, booking links, and timeline estimates, all that’s left for you is to say, “Let’s go!',
    link: '/blog/tailwind-css-guide',
  },
];

const About: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-white">
        {/* Left Side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-[#2f487d] mb-6">ABOUT US</h2>
          <p className="text-lg text-[#2f487d] leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
            What began as an opportunity to bring the immensely popular sport of squash to the New York masses has
            evolved and expanded to a network of over 150 clubs catering to over half a million members across eight
            states and two countries (including Switzerland!).
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Start Exploring
          </button>
        </div>

        {/* Right Side - Image with Circle Background */}
        <div className="relative lg:w-1/2 mb-10 lg:mb-0 flex justify-center items-center">
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-pink-300 rounded-full z-0" />
          <img
            src={aboutimg}
            alt="Illustration representing our story or mission"
            className="relative z-10 w-[85%] max-w-sm object-contain"
          />
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-3xl">
            Our <span className="text-blue-500">Latest Posts</span>
          </h2>

          {examplePosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {examplePosts.map((post) => (
                <div key={post.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <a
                      href={post.link}
                      aria-label={`Read more about ${post.title}`}
                      className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-6">No posts available yet.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
