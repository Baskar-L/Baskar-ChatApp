// import React from "react";
// import User from "./User";
// import useGetAllUsers from "../../context/useGetAllUsers";

// function Users() {
//   const [allUsers, loading] = useGetAllUsers();
//   console.log(allUsers);
//   return (
//     <div>
//       <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
//         Messages
//       </h1>
//       <div
//         className="py-2 flex-1 overflow-y-auto"
//         style={{ maxHeight: "calc(84vh - 10vh)" }}
//       >
//         {allUsers.map((user, index) => (
//           <User key={index} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Users;




import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);

  return (
    <div className="text-[#111]">
      {/* Header */}
      <h1 className="px-4 py-2 text-[15px] font-semibold text-green-700 bg-[#e9f5ec] rounded-md shadow-sm mb-2">
        Messages
      </h1>

      {/* User List */}
      <div
        className="flex-1 overflow-y-auto custom-scroll space-y-1"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {loading ? (
          <p className="text-center text-gray-500">Loading users...</p>
        ) : allUsers.length > 0 ? (
          allUsers.map((user, index) => (
            <User key={index} user={user} />
          ))
        ) : (
          <p className="text-center text-gray-400">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Users;
