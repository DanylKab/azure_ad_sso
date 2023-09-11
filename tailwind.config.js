const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};

const textColor = {
  ["primary-dark"]: generateColorClass("text-primary-dark"),
  ["primary-light"]: generateColorClass("text-primary-light"),
};

const backgroundColor = {
  ["primary-dark"]: generateColorClass("bg-primary-dark"),
  ["primary-light"]: generateColorClass("bg-primary-light"),
  ["primary-white"]: generateColorClass("bg-primary-white"),
};

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor,
      backgroundColor,
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
