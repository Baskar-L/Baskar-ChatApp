import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser?.user?._id;

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`px-4 py-1 w-full flex ${itsMe ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`relative max-w-[80%] md:max-w-[60%] p-3 rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base
          ${itsMe
            ? "bg-[#DCF8C6] text-black rounded-br-none animate-slideLeft"
            : "bg-white text-black rounded-bl-none animate-slideRight"}`}
      >
        {/* Show sender name only for other users */}
        {!itsMe && (
          <p className="text-xs text-green-700 font-semibold mb-1">
            {message.senderName || "Unknown"}
          </p>
        )}

        {/* Message Text */}
        <p className="mb-1 font-[500] leading-snug whitespace-pre-wrap break-words">
          {message.message}
        </p>

        {/* Timestamp */}
        <div className="text-[10px] text-gray-500 text-right mt-1">{formattedTime}</div>
      </div>
    </div>
  );
}

export default Message;
