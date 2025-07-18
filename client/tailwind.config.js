// /** @type {import('tailwindcss').Config} */
// export default {
//     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//     theme: {
//         extend: {},
//     },
//     plugins: [require("daisyui")],
// };



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#f0f2f5", // WhatsApp-style light background
//         whatsappGreen: "#25D366", // WhatsApp brand color
//       },
//     },
//   },
//   plugins: [
//     require("daisyui"),
//     require("tailwind-scrollbar")({ nocompatible: true }),
//   ],
//   daisyui: {
//     themes: [
//       {
//         customlight: {
//           primary: "#f0f2f5",
//           secondary: "#ffffff",
//           accent: "#25D366",
//           neutral: "#e5e5e5",
//           "base-100": "#ffffff",
//           info: "#3ABFF8",
//           success: "#36D399",
//           warning: "#FBBD23",
//           error: "#F87272",
//         },
//       },
//     ],
//   },
// };




/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0f2f5", // WhatsApp-style light background
        whatsappGreen: "#25D366", // WhatsApp brand color
        messageSender: "#DCF8C6", // WhatsApp message bg (sender)
        messageReceiver: "#FFFFFF", // WhatsApp message bg (receiver)
      },
      fontFamily: {
        whatsapp: ["'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        message: "0 1px 0.5px rgba(0, 0, 0, 0.13)",
      },
      transitionProperty: {
        message: "background-color, color, transform, box-shadow",
      },
      keyframes: {
        popIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        popIn: "popIn 0.3s ease-out",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  daisyui: {
    themes: [
      {
        customlight: {
          primary: "#f0f2f5",
          secondary: "#ffffff",
          accent: "#25D366",
          neutral: "#e5e5e5",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
