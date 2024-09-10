/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Gupter'],
        // 'ovo': ['Ovo'],
      },
      screens: {
        'xxs': '450px', // Custom screen size for xs
        'xs': '520px', // Custom screen size for xs
        'sm': '640px', // Tailwind default
        'md': '768px', // Tailwind default
        'lg': '1024px', // Tailwind default
        'xl': '1280px', // Tailwind default
        '2xl': '1536px', // Tailwind default
        '3xl': '1920px', // Custom screen size for 3xl
      },
    },

    // colors:{
    //   'primarycolor' : '#e63946',
    //   'secondarycolor' : '#e9edc9',
    //   'secondary-dark-color' : '#1d3557',

    //   'whitecolor' : '#ffe5ec',
    //   'light-bg-color' : '#f1faee',
    //   'light-text-color' : '#f72585',
    //   'border-color' : '#efe8ec',
    //   'blue-primary': '#55bae9'
    // }
  },
  plugins: [],
}

