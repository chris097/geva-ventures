/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primarywhite': "#FEFEFE",
        'primarypink': "#FF6600",
        'primaryyellow': "#FFFFF1",
        'primaryblack': "#0C0A0A",
        'secondaryblack': "#1A1A1A",
        'primarygray': "#F2F3F5",
      },
      fontFamily: {
        tillitium: ["Titillium Web, sans-serif"],
        roboto: ["Roboto', sans-serif"],
        "roboto-slab": ["Roboto Slab', sans-serif"],
      }
    },
  },
  plugins: [],
}
