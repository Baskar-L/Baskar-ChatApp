
import React from "react";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#e5ddd5] transition-all duration-500">
      <div className="flex flex-col items-center gap-6 p-6 rounded-lg shadow-xl bg-white border border-gray-200 animate-fade-in w-[90%] max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 animate-fade-in-up">
          <img
            src="/assets/baskar.png" // 🟢 Replace with your logo image path
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
           Chatify by Baskar
          </h1>
        </div>

        {/* Loading skeletons */}
        <div className="flex flex-col gap-4 w-full animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 bg-gray-300 rounded-full animate-pulse" />
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse" />
            </div>
          </div>
          <div className="h-32 w-full bg-gray-300 rounded-lg animate-pulse" />
        </div>

        {/* Loading Text */}
        <p className="text-sm text-gray-600 italic animate-fade-in-up">
          Preparing your chat experience...
        </p>
      </div>
    </div>
  );
}

export default Loading;
