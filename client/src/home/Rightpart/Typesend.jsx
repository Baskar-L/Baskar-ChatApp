import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message.trim());
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary px-4 py-2 flex items-center gap-2 md:gap-4 border-t border-neutral"
    >
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow bg-white text-black placeholder-gray-500 border border-neutral rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-accent transition duration-200 ease-in-out"
      />
      <button
        type="submit"
        disabled={loading || !message.trim()}
        className="bg-accent text-white p-3 rounded-full hover:bg-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50"
      >
        <IoSend className="text-xl" />
      </button>
    </form>
  );
}

export default Typesend;

