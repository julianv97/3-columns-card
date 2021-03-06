module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "200px",
      // => @media (min-width: 640px) { ... }

      md: "400px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      bigShoulder: "Big Shoulders Display",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
