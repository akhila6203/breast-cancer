/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#4F7359",
        royaldeep: "#3D5A47",
        navy: "#2F4638",
        ice: "#E8F0EA",
        mist: "#F6F9F6",
        ink: "#3D4A40",
        heading: "#243528",
        line: "#D4E0D6",
        sky: "#E87744",
        rosebrand: "#4F7359",
        plum: "#2F4638",
        blush: "#F6F9F6",
        tealcare: "#E87744",
      },
      fontFamily: {
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
        display: ['"Montserrat"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 18px 50px rgba(47, 70, 56, 0.12)",
        lift: "0 22px 40px rgba(47, 70, 56, 0.14)",
      },
      fontSize: {
        caption: ["15px", { lineHeight: "1.65" }],
        body: ["17px", { lineHeight: "1.75" }],
      },
      borderRadius: {
        blob: "2rem 1rem 2.5rem 1.25rem",
        wave: "3rem 1.5rem 3rem 1.5rem",
      },
    },
  },
  plugins: [],
};
