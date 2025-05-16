type BlogCardProps = {
  title: string;
  date: string;
  readTime: string;
  image: string;
};

export default function BlogCard({
  title,
  date,
  readTime,
  image,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{`${date} – ${readTime}`}</p>
      </div>
    </div>
  );
}
