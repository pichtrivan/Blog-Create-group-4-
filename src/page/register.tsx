import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.fullName,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
        navigate("/"); // ✅ Redirect to home page
      } else {
        console.error("Registration failed:", data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
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

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-800 font-semibold hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
