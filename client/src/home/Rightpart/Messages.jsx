import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";

function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage(); // listens for incoming messages

  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto px-2 py-4 bg-[#ece5dd] transition-all duration-300"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : messages.length > 0 ? (
        messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length - 1 ? lastMsgRef : null}
            className="my-1"
          >
            <Message message={message} />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-lg font-medium">
            Say Hi 👋 to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
