/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        fontFamily: {
          mplus : ["'M PLUS rounded 1c', 'sans-serif"] // Your custom font
        }
      }
    },
    plugins: []
  };