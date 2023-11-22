/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/bg.png')",
        'highlight': 'linear-gradient(-100deg, rgba(255, 255, 255, 0), yellow 85%, rgba(255, 255, 255, 0))',
      },
    },
  },
  plugins: [],
};
