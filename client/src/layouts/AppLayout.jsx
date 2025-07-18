// src/layouts/AppLayout.jsx
import React from "react";
import Left from "../home/Leftpart/Left";
import Right from "../home/Rightpart/Right";
import Logout from "../home/left1/Logout";

const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#e5ddd5]">
      {/* Optional Logout button */}
      <div className="hidden lg:block">
        <Logout />
      </div>

      {/* Sidebar / Left Panel */}
      <Left />

      {/* Chat Area / Right Panel */}
      <Right />
    </div>
  );
 };
 export default AppLayout;





