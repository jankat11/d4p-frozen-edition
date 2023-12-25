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
      sans : ["Cormorant", "mono"],
      serif: ["Parisienne", "mono"],
      raleway: ["Raleway", "mono"],
    },
    extend: {
      colors: {
        primary: "#977740",
        secondary: "#91846F",
        accent: "#C0AC8A",
        neutral: "#F3F0EA",
        primaryDark: "#886b3a",
        secondaryDark: "#665c4e",
        accentDark: "#ad9b7c",
        navtitle: "#5b4726",   
        infoDark: "#05875f",
        info: "#059669",
        aside: "#fcfbfb",
        letter: "#736753",
        "base-100": "#fff"
      },
      screens: {
        md : "810px"
      },
    },
  },
  plugins: [require('daisyui')],
}
