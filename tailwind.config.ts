import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
  fontFamily:{
    sans: 'var(--font-sans)',
    sarif: 'var(--font-serif)',
  },
  

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-image-linear-gradient-top': {
          'mask-image': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
          '-webkit-mask-image': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
        },
        '.mask-image-linear-gradient-right': {
          'mask-image': 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          '-webkit-mask-image': 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        },
      });
    },
  ],
};
export default config;
