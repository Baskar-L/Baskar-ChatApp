// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "https://baskar-chatapp.vercel.app",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// // realtime message code goes here
// export const getReceiverSocketId = (receiverId) => {
//   return users[receiverId];
// };

// const users = {};

// // used to listen events on server side.
// io.on("connection", (socket) => {
//   console.log("a user connected", socket.id);
//   const userId = socket.handshake.query.userId;
//   if (userId) {
//     users[userId] = socket.id;
//     console.log("Hello ", users);
//   }
//   // used to send the events to all connected users
//   io.emit("getOnlineUsers", Object.keys(users));

//   // used to listen client side events emitted by server side (server & client)
//   socket.on("disconnect", () => {
//     console.log("a user disconnected", socket.id);
//     delete users[userId];
//     io.emit("getOnlineUsers", Object.keys(users));
//   });
// });

// export { app, io, server };




// import express from "express";
// import http from "http";
// import { Server } from "socket.io";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// import userRoutes from "./routes/user.js"; // ✅ Your user routes

// dotenv.config();

// const app = express();
// const server = http.createServer(app);

// // ✅ Setup Socket.io with CORS
// const io = new Server(server, {
//   cors: {
//     origin: "https://baskar-chatapp.vercel.app",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// // ✅ Middleware
// app.use(cors({
//   origin: "https://baskar-chatapp.vercel.app",
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// // ✅ API Routes
// app.use("/api/user", userRoutes);

// // ✅ MongoDB Connection & Server Start
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     server.listen(process.env.PORT || 5000, () => {
//       console.log(`🚀 Server running on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//   });

// // ✅ Socket.io Logic
// const users = {};

// export const getReceiverSocketId = (receiverId) => {
//   return users[receiverId];
// };

// io.on("connection", (socket) => {
//   console.log("⚡ New user connected:", socket.id);

//   const userId = socket.handshake.query.userId;
//   if (userId) {
//     users[userId] = socket.id;
//     console.log("👤 Active users:", users);
//   }

//   io.emit("getOnlineUsers", Object.keys(users));

//   socket.on("disconnect", () => {
//     console.log("⚠️ User disconnected:", socket.id);
//     delete users[userId];
//     io.emit("getOnlineUsers", Object.keys(users));
//   });
// });

// export { app, io, server };



import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "../config/db.js";
import userRoutes from "../routes/user.route.js";

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);

// Allow frontend origin
const allowedOrigin = process.env.CLIENT_URL || "https://baskar-chatapp.vercel.app";

const io = new Server(server, {
  cors: {
    origin: allowedOrigin,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("✅ A user connected:", socket.id);

  socket.on("addUser", (userId) => {
    userSocketMap[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });

  socket.on("disconnect", () => {
    console.log("❌ A user disconnected:", socket.id);
    // Remove user from map
    for (const [userId, socketId] of Object.entries(userSocketMap)) {
      if (socketId === socket.id) {
        delete userSocketMap[userId];
        break;
      }
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

