import React, { useEffect, useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";

function Logout() {
  const [showDetails, setShowDetails] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      const storedUser = localStorage.getItem("ChatApp");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser?.name && parsedUser?.email) {
            setUser(parsedUser);
          } else {
            console.warn("User info incomplete:", parsedUser);
          }
        } catch (error) {
          console.error("Error parsing ChatApp user:", error);
        }
      } else {
        console.warn("No ChatApp user found in localStorage");
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="relative w-[70px] bg-white shadow-md border-r border-gray-200 h-full flex flex-col items-center justify-end py-6 rounded-r-2xl">
      {/* User Icon */}
      <div className="mb-4 relative">
        <button
          onClick={() => setShowDetails((prev) => !prev)}
          className="focus:outline-none"
        >
          <FaUserCircle className="text-[36px] text-[#075e54] hover:scale-110 transition-transform" />
        </button>

        {/* User Info Dropdown */}
        {showDetails && (
          <div className="absolute bottom-[60px] left-[80px] z-50 w-[220px] bg-white border border-gray-300 shadow-xl rounded-lg p-4 transition-all duration-300 ease-in-out">
            {user ? (
              <>
                <p className="font-semibold text-[#075e54] mb-1">{user.name}</p>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </>
            ) : (
              <p className="text-red-500 text-sm">User info not available</p>
            )}
          </div>
        )}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="p-2 rounded-full hover:bg-[#dcf8c6] transition-all duration-300"
        title="Logout"
      >
        <TbLogout2 className="text-[32px] text-red-500 hover:text-red-600" />
      </button>
    </div>
  );
}

export default Logout;


