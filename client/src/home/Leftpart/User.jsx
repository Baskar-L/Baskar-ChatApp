import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`rounded-md transition duration-300 cursor-pointer 
        ${isSelected ? "bg-[#e1f5e5]" : "bg-white"} 
        hover:bg-[#dcf8c6] shadow-sm`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center space-x-4 px-4 py-3">
        {/* Avatar with online status */}
        <div className="relative w-11 h-11">
          <img
            src={user.avatar || "/assets/user.png"}
            alt={user.name}
            className="w-11 h-11 object-cover rounded-full border border-gray-300"
          />
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>

        {/* User Info */}
        <div className="flex flex-col">
          <h1 className="text-gray-800 font-medium text-[15px]">{user.name}</h1>
          <span className="text-gray-500 text-sm">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;


