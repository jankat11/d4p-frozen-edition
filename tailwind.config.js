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
        primaryLight: "#765d3a",
        secondary: "#8D6731",
        accent: "#DBBF97",
        greenish: "#626724",
        darkgreen: "#24674B",
        green: "#50856f",
        info: "#04946C",
        red: "#672a24",
        violet: "#4B2467",
        purple: "#843FB5",
        lightpurple: "#bd94da",
        blue: "#7CA0D1",
        neutral: "#f8f3ec",
        neutralDark: "#EDE6DB",
        aside: "#FDFBF8",
        asideLight: "#FDFCFA",
        westar: "#E0DBD3",
        hillary: "#ACA48C",
        napa: "#AC9C8C",
        napaDarker: "#9b8c7e",
        napaDark: "#786d62",
        napaDarkest: "#675e54"
      },
      screens: {
        md : "810px",
        lg : "1025px"
      },
    },
  },
  plugins: [require('daisyui')],
}

/* theme: {
  fontFamily: {
    sans : ["EB Garamond", "mono"],
    serif: ["Parisienne", "mono"],
    raleway: ["Inter", "mono"],
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
  }, */