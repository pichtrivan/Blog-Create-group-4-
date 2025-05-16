import React from 'react';
import aboutimg from '../assets/about-img.png';
import leavesImage from '../assets/about-1.png';
import about2 from '../assets/about-2.png';

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

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* About Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-white">
        {/* Left - Text */}
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

        {/* Right - Image with Circle */}
        <div className="relative lg:w-1/2 mb-10 lg:mb-0 flex justify-center items-center">
          <div
            className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-pink-300 rounded-full z-0"
            aria-hidden="true"
            role="presentation"
          />
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
          <h2 id="latest-posts" className="text-2xl font-bold mb-8 text-center md:text-3xl">
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
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-white">
        {/* Left - Text */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 leading-snug">
            Planting and Maintaining <br /> Trees
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed max-w-2xl">
            A healthy community forest begins with careful planning, so trees are placed in areas that maximize their benefits.
            The same goes for trees around your home or property. Planting trees in the right spots will keep your home cool in the summer
            and tame the brutal winter wind.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full w-fit shadow-md transition duration-300"
          >
             Start Exploring
          </button>
        </div>

        {/* Right - Image */}
        <div className="w-full h-64 md:h-auto">
          <img
            src={leavesImage}
            alt="Planting Trees"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Section 2: Image Left, Text Right */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-gray-50">
        {/* Left - Image */}
        <div className="w-full h-64 md:h-auto">
          <img
            src={about2}
            alt="Green Environment"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 leading-snug">
            The Power of Green Spaces
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed max-w-2xl">
            Green environments not only boost mental well-being but also reduce air pollution, improve biodiversity, and help regulate urban temperatures.
            Our mission is to foster more of these healthy, tree-filled spaces for future generations.
          </p>
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full w-fit shadow-md transition duration-300"
          >
            Start Exploring
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
