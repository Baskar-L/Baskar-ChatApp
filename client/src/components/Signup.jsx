import React from "react";


import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../assets/baskar.png"; // make sure logo exists

function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };
  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    await axios
      .post("https://baskar-chatapp-backend.onrender.com/api/user/signup", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Signup successful");
          navigate("/login");
        }
        // localStorage.setItem("ChatApp", JSON.stringify(response.data));
        // setAuthUser(response.data);
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

        {/* Heading */}
        <h1 className="text-center text-2xl font-bold text-[#25D366] mb-1">
          Create an Account
        </h1>
        <p className="text-center text-gray-600 text-sm mb-6">
          Join and start messaging securely.
        </p>

        {/* Fullname */}
        <div className="mb-3">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            {...register("fullname", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] outline-none transition duration-200"
          />
          {errors.fullname && (
            <span className="text-red-500 text-sm font-semibold">
              Full name is required
            </span>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
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
            placeholder="Create password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] outline-none transition duration-200"
          />
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              Password is required
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: true,
              validate: validatePasswordMatch,
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] outline-none transition duration-200"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <div className="mt-6">
          <input
            type="submit"
            value="Sign Up"
            className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white py-2 rounded-lg font-semibold transition duration-200 cursor-pointer"
          />
        </div>

        {/* Link to Login */}
        <p className="text-center text-sm text-gray-700 mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-[#25D366] font-semibold hover:underline ml-1"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
