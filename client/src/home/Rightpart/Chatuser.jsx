import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  // ✅ Get current logged-in user from localStorage
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="pl-5 pt-5 h-[12vh] flex space-x-4 bg-white border-b shadow-sm items-center">
      {/* Avatar with online indicator */}
      <div className="relative w-12 h-12">
        {currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 border-green-500 shadow-md hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <img
            src="/assets/user.png"
            alt="default"
            className="w-12 h-12 object-cover rounded-full border-2 border-green-500 shadow-md hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* Online dot */}
        <span
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white animate-pulse ${
            getOnlineUsersStatus(currentUser?._id) === "Online"
              ? "bg-green-500"
              : "bg-gray-400"
          }`}
        ></span>
      </div>

      {/* Info */}
      <div>
        <h1 className="text-md md:text-lg font-semibold text-[#075E54] transition-colors duration-300">
          {currentUser?.name || ""}
        </h1>
        <span className="text-sm text-gray-500">
          {getOnlineUsersStatus(currentUser?._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;

