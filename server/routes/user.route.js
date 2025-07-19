// import express from "express";
// import {
//   allUsers,
//   login,
//   logout,
//   signup,
// } from "../controller/user.controller.js";
// import secureRoute from "../middleware/secureRoute.js";
// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/logout", logout);
// router.get("/allusers", secureRoute, allUsers);

// export default router;



import express from "express";
import {
  allUsers,
  login,
  logout,
  signup,
} from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

// 📝 Auth Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// 🔐 Protected Route
router.get("/allusers", secureRoute, allUsers);

export default router;
