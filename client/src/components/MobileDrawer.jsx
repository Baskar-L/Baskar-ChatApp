import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed
import Left from "../home/Leftpart/Left";
import Logout from "../home/left1/Logout";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Button */}
      <button
        className="p-3 m-2 text-gray-700"
        onClick={toggleDrawer}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40" onClick={toggleDrawer}></div>
      )}

      {/* Drawer Content */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[85%] bg-white shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logout + Left panel in mobile drawer */}
        <div className="flex h-full">
          <div className="w-[70px] border-r">
            <Logout />
          </div>
          <div className="flex-1 overflow-y-auto">
            <Left />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
