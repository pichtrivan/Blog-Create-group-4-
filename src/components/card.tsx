import React from "react";

// Card Component
const Card:  React.FC = () => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden text-left">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Wooden House"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        <button className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-lg">
          ❤️
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-gray-800">Wooden House</h2>
          <div className="flex items-center text-yellow-700 text-sm">⭐ 5.0</div>
        </div>
        <p className="text-gray-600 mb-4">
          Peaceful home surrounded by nature and trees.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { tooltip: "$129/night", icon: "💰" },
            { tooltip: "Free wifi", icon: "📶" },
            { tooltip: "2 beds", icon: "🛏️" },
          ].map(({ tooltip, icon }, idx) => (
            <div
              key={idx}
              title={tooltip}
              className="p-2 bg-gray-100 text-gray-700 rounded-full border hover:bg-gray-200 transition"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Reserve
        </button>
      </div>
    </div>
  );
};

// CardGrid Component
const CardGrid :  React.FC  = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardGrid;
