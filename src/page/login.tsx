import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom"; 

const LoginPage = () => {
=======
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

>>>>>>> main
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiUrl}/api/auth/local`,
        {
          identifier: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.jwt);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
    // Handle your login logic here
    // console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-green-900">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Log in to your account to continue
        </p>

<<<<<<< HEAD
        <form onSubmit={handleSubmit} className="space-y-4">
=======
        <form onSubmit={handleLogin} className="space-y-4">
>>>>>>> main
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
                👁️
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-700">Remember me</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition"
          >
            Log in
          </button>
        </form>

        {/* Register link */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-800 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
