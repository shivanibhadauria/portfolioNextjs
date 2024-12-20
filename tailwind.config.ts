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
  maskImage: {
    'linear-gradient': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
  },
  // Add this manually to support Chromium-based browsers
  '-webkit-mask-image': {
    'linear-gradient': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
  },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-image-linear-gradient': {
          'mask-image': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
          '-webkit-mask-image': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
        },
      });
    },
  ],
};
export default config;
