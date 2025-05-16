import BlogCard from "../components/blogcard";
import The from "../assets/b1.png";

const blogs = [
  {
    title: "Koh Kong Krao",
    date: "Fri May 19 2023",
    readTime: "5 min read",
    image: The,
  },
  {
    title: "Best memories of rainforest located in Cardamom Mountain",
    date: "Tue Oct 31 2023",
    readTime: "2 min read",
    image: The,
  },
  {
    title: "Khnang Veal",
    date: "Wed Jul 26 2023",
    readTime: "3 min read",
    image: The,
  },
];

export default function BlogSection() {
  return (
    <section>
      <div className="bg-green-900 bg-opacity-60 text-white text-center py-16 px-4 ">
        <h2 className="text-4xl font-bold mt-6">Blogs</h2>
        <p className="max-w-2xl mx-auto text-lg">
          No matter what kind of traveller you are, we’ve got a tour (or a
          dozen) that'll fit you just right.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
}
