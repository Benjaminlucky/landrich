const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        customGold: {
          10: "#f6e3b3", // 10% shade of #d7a62c
          20: "#eddc8d", // 20% shade
          30: "#e4d568", // 30% shade
          40: "#dbce43", // 40% shade
          50: "#d7a62c", // Base color #d7a62c
          60: "#c19727",
          70: "#aa8822",
          80: "#93791c",
          90: "#7d6a17",
          100: "#665b12",
        },
        customNavy: {
          10: "#999cb0", // 10% shade of #030b51
          20: "#73788f", // 20% shade
          30: "#4d536f", // 30% shade
          40: "#272f4f", // 40% shade
          50: "#030b51", // Base color #030b51
          60: "#020945",
          70: "#020738",
          80: "#01052b",
          90: "#01031e",
          100: "#000211",
        },
        customBlue: {
          10: "#a6b7e5", // 10% shade of #0a1f9b
          20: "#7e92e0", // 20% shade
          30: "#566ddc", // 30% shade
          40: "#2f49d7", // 40% shade
          50: "#0a1f9b", // Base color #0a1f9b
          60: "#091b88",
          70: "#081774",
          80: "#061360",
          90: "#050f4c",
          100: "#040b39",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
