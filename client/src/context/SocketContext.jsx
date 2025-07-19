// import { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "./AuthProvider";
// import io from "socket.io-client";
// const socketContext = createContext();


// export const useSocketContext = () => {
//   return useContext(socketContext);
// };

// export const SocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [authUser] = useAuth();

//   useEffect(() => {
//     if (authUser) {
//       const socket = io("https://baskar-chatapp-backend.onrender.com", {
//         query: {
//           userId: authUser.user._id,
//         },
//       });
//       setSocket(socket);
//       socket.on("getOnlineUsers", (users) => {
//         setOnlineUsers(users);
//       });
//       return () => socket.close();
//     } else {
//       if (socket) {
//         socket.close();
//         setSocket(null);
//       }
//     }
//   }, [authUser]);
//   return (
//     <socketContext.Provider value={{ socket, onlineUsers }}>
//       {children}
//     </socketContext.Provider>
//   );
// };



import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";

const socketContext = createContext();

export const useSocketContext = () => {
  return useContext(socketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUser] = useAuth();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("https://baskar-chatapp-backend.onrender.com", {
        query: {
          userId: authUser.user._id,
        },
        transports: ["websocket"], // ✅ Important for Render and CORS stability
        withCredentials: true,     // ✅ Ensure cookies/token-based auth support
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <socketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </socketContext.Provider>
  );
};
