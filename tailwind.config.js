/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			'vite-bg': '#242424',
  			'origin': '#c5f82a'
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
