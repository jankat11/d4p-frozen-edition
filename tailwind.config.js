/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
/*     fontFamily: {
      sans : ["Inter", "mono"],
      serif: ["Parisienne", "mono"],
      garamond: ["EB Garamond", "mono"],
    }, */
  
    extend: {
      colors: {
        primary: "#674B24",
        /* primary: "#674B24", */
        primaryLight: "#765d3a",
        letter: "#674B24",
        secondary: "#8D6731",
        accent: "#DBBF97",
        greenish: "#626724",
        green: "#24674B",
        lightgreen: "#50856f",
        info: "#0090A0",  
        red: "#672a24",
        violet: "#4B2467",
        purple: "#843FB5",
        lightpurple: "#bd94da",
        blue: "#7CA0D1",
        neutral: "#f8f3ec",
        neutralDark: "#EDE6DB",
        aside: "#FDFCFA",
        asideDark: "#FDFBF8",
        westar: "#E0DBD3",
        hillary: "#ACA48C",
        napa: "#AC9C8C",
        napaDarker: "#9b8c7e",
        napaDark: "#786d62",
        napaDarkest: "#675e54",
        'dallas': {
          '50': '#faf9ec',
          '100': '#f2f1cf',
          '200': '#e7e2a1',
          '300': '#d8cd6c',
          '400': '#ccb743',
          '500': '#bca336',
          '600': '#a2822c',
          '700': '#826126',
          '800': '#674b24',
          '900': '#5e4325',
          '950': '#362412',
          DEFAULT: '#674b24',
      },
      
      },
      screens: {
        xs : "464px",
        md : "810px",
        lg : "1025px"
      },
    },
  },
  plugins: [require('daisyui')],
}
