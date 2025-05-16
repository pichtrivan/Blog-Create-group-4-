import React, { useState } from "react";

const RegisterPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // ✅ onChange handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with registration logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-green-900">
          Create an Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Register to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="border-gray-300 text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-green-700 py-1"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* phone number */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-green-700 py-1"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-green-700 py-1"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-green-700 py-1 pr-8"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-0 top-1 text-gray-500 hover:text-gray-800"
              >
                👁
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-800 font-semibold hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;