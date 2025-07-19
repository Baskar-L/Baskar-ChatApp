// import jwt from "jsonwebtoken";

// const createTokenAndSaveCookie = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
//     expiresIn: "10d",
//   });
//   res.cookie("jwt", token, {
//     httpOnly: true, // xss
//     secure: true,
//     sameSite: "strict", // csrf
//   });
// };
// export default createTokenAndSaveCookie;


import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",        // ✅ required for cross-site (vercel ↔ render)
  });
};

export default createTokenAndSaveCookie;




// import jwt from "jsonwebtoken";

// /**
//  * Create JWT token and store it in a secure HTTP-only cookie.
//  * 
//  * @param {string} userId - The user's unique ID.
//  * @param {object} res - Express response object.
//  */
// const createTokenAndSaveCookie = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
//     expiresIn: "10d",
//   });

//   res.cookie("jwt", token, {
//     httpOnly: true,         // Prevents JS access (XSS protection)
//     secure: process.env.NODE_ENV === "production", // Only over HTTPS in production
//     sameSite: "strict",     // Prevent CSRF
//     maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days in milliseconds
//   });

//   // Optional: You can also send token in JSON if needed
//   // res.status(200).json({ message: "Login successful", token });
// };

// export default createTokenAndSaveCookie;
