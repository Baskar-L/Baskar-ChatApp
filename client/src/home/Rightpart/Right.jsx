import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full h-full bg-primary text-black transition-all duration-300 ease-in-out">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="flex flex-col h-screen">
          {/* Top Chat Header */}
          <Chatuser />

          {/* Messages Section */}
          <div
            className="flex-1 overflow-y-auto px-2 py-3 custom-scrollbar"
            style={{ maxHeight: "calc(100vh - 120px)" }}
          >
            <Messages />
          </div>

          {/* Typing Box */}
          <Typesend />
        </div>
      )}
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();

  return (
    <div className="relative w-full h-full bg-primary text-center flex items-center justify-center px-4">
      {/* Mobile drawer toggle */}
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute top-4 left-4"
      >
        <CiMenuFries className="text-xl text-gray-600" />
      </label>

      <div className="animate-fade-in transition-all duration-300">
        <h1 className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
          Welcome&nbsp;
          <span className="font-semibold text-whatsappGreen text-xl md:text-2xl">
            {authUser?.user?.fullname}
          </span>
          <br />
          <span className="text-sm md:text-base text-gray-600">
            No chat selected, please start a conversation by selecting a contact.
          </span>
        </h1>
      </div>
    </div>
  );
};
