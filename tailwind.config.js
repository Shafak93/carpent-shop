module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      
      "cupcake",
    ],
    mytheme: {
      primary: "#0FCFEC",
      secondary: "#19D3AE",
      accent: "#3A4256",
      neutral: "#3d4451",
      "base-100": "#ffffff",
    },
  },
  plugins: [require("daisyui")],
}

/*{
  mytheme: {
    primary: "#0FCFEC",
    secondary: "#19D3AE",
    accent: "#3A4256",
    neutral: "#3d4451",
    "base-100": "#ffffff",
  },
},
*/