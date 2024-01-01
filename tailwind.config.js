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
      sans : ["EB Garamond", "mono"],
      serif: ["Parisienne", "mono"],
      raleway: ["Inter", "mono"],
    },
    extend: {
      colors: {
        primary: "#674B24",

        
        secondary: "#24672A",
        accent: "#C0AC8A",
        neutral: "#F3F0EA",

        accentDark: "#ad9b7c",
    
     
        aside: "#fcfbfb",
     
        "base-100": "#fff"
      },
      screens: {
        md : "810px"
      },
    },
  },
  plugins: [require('daisyui')],
}
