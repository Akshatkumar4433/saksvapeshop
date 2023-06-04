/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '50px 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
}

