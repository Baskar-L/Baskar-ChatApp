import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../assets/baskar.png"; // Make sure logo exists here

function Login() {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("https://baskar-chatapp-backend.onrender.com/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f0f2f5] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg animate-fade-in transition-all duration-300"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl font-bold text-[#25D366] mb-1">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-600 text-sm mb-6">
          Login to continue the conversation
        </p>

        {/* Email */}
        <div className="mb-3">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] outline-none transition duration-200"
          />
          {errors.email && (
            <span className="text-red-500 text-sm font-semibold">
              Email is required
            </span>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] outline-none transition duration-200"
          />
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              Password is required
            </span>
          )}
        </div>

        {/* Submit */}
        <div className="mt-6">
          <input
            type="submit"
            value="Login"
            className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white py-2 rounded-lg font-semibold transition duration-200 cursor-pointer"
          />
        </div>

        {/* Link to Signup */}
        <p className="text-center text-sm text-gray-700 mt-4">
          Don't have an account?
          <Link
            to="/signup"
            className="text-[#25D366] font-semibold hover:underline ml-1"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

