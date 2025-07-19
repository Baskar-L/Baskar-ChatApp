// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// function useGetAllUsers() {
//   const [allUsers, setAllUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const getUsers = async () => {
//       setLoading(true);
//       try {
//         const token = Cookies.get("jwt");
//         const response = await axios.get("https://baskar-chatapp-backend.onrender.com/api/user/allusers", {
//           credentials: "include",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setAllUsers(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log("Error in useGetAllUsers: " + error);
//       }
//     };
//     getUsers();
//   }, []);
//   return [allUsers, loading];
// }

// export default useGetAllUsers;




import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function useGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");

        const response = await axios.get(
          "https://baskar-chatapp-backend.onrender.com/api/user/allusers",
          {
            withCredentials: true, // Send cookies
            headers: {
              Authorization: `Bearer ${token}`, // Include JWT token
            },
          }
        );

        setAllUsers(response.data);
      } catch (error) {
        console.error("❌ Error in useGetAllUsers:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return [allUsers, loading];
}

export default useGetAllUsers;

