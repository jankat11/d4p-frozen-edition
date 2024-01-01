/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans : ["Inter", "mono"],
      serif: ["Parisienne", "mono"],
      garamond: ["EB Garamond", "mono"],
    },
  
    extend: {
      colors: {
        primary: "#674B24",
        secondary: "#8D6731",
        accent: "#DBBF97",
        greenish: "#626724",
        green: "#24674B",
        info: "#40B785",
        red: "#672a24",
        violet: "#4B2467",
        purple: "#843FB5",
        lightpurple: "#bd94da",
        blue: "#7CA0D1",
        neutral: "#f8f3ec",
        neutralDark: "#f7f0e7",
        aside: "#FDFBF8",
        asideLight: "#FDFCFA",
        "base-100": "#fff"
      },
      screens: {
        md : "810px"
      },
    },
  },
  plugins: [require('daisyui')],
}

/* 
accent: "#C0AC8A",
neutral: "#F3F0EA",
accentDark: "#ad9b7c", */