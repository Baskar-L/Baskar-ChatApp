import React, { useEffect, useState } from "react";

function CurrentUserInfo() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("ChatApp"));
    if (storedUser?.user) {
      setCurrentUser(storedUser.user);
    }
  }, []);

  if (!currentUser) return null;

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-md">
      <div className="relative w-11 h-11">
        <img
          src={currentUser.avatar || "/assets/baskar.png"}
          alt={currentUser.name}
          className="w-11 h-11 object-cover rounded-full border border-gray-300"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-gray-800 font-semibold text-[15px]">
          {currentUser.name}
        </h1>
        <span className="text-gray-500 text-sm">{currentUser.email}</span>
      </div>
    </div>
  );
}

export default CurrentUserInfo;
