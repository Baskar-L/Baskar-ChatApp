


import React from "react";
import Search from "./Search";
import Users from "./Users";
import { FaComments } from "react-icons/fa";
import logo from "../../assets/baskar.png";

function Left() {
  return (
    <div className=" bg-[#f0f2f5] text-[#111] w-full md:w-[30%] h-screen flex flex-col transition-all duration-500 ease-in-out border-r border-gray-300">
      {/* Logo and Title */}
      <div className="flex items-center justify-between md:justify-start gap-3 p-4 border-b border-gray-300 bg-white shadow-sm">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 object-cover rounded-full transition-transform duration-300 hover:scale-105"
        />
        <h1 className="font-semibold text-lg hidden md:block">Chatify by Baskar</h1>
        <FaComments className="text-xl text-gray-600 md:hidden ml-auto" />
      </div>

      {/* Search Bar */}
      <div className="hidden md:block bg-white border-b border-gray-200 p-2">
        <div className="w-full bg-[#e5e5e5] rounded-full px-4 py-2 flex items-center shadow-inner transition-all focus-within:ring-2 focus-within:ring-[#25D366]">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
          />
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto custom-scroll px-2 bg-[#f0f2f5]">
        <Users />
      </div>
    </div>
  );
}

export default Left;

