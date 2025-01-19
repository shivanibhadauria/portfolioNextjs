import { transform } from "next/dist/build/swc/generated-native";
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

  animation:{
    'ping-large': "ping-large 1s ease-in-out infinite ",
    'move-left': "move-left 30s linear infinite",
    'move-right': "move-right' 30s linear infinite"
    
  },

  keyframes:{
    'ping-large': {
      '75%, 100%': {
        transform: 'scale(3)',
        opacity: '0',
      }},
      'move-left':{
       '0%':{
        transform: 'translateX(0%)'

        },
        '100%':{
          transform: 'translateX(-50%)'
        }
      },

      'move-right':{
       '0%':{
        transform: 'translateX(-50%)'

        },
        '100%':{
          transform: 'translateX(0%)'
        }
      }
   
  }
  

    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.mask-image-linear-gradient-top': {
          'mask-image': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
          '-webkit-mask-image': 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
        },
        '.mask-image-linear-gradient-right': {
          'mask-image': 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          '-webkit-mask-image': 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        },
        '.mask-image-radial-gradient-top': {
          'mask-image': 'radial-gradient(50% 50% at bottom center, black,  transparent)',
          '-webkit-mask-image': 'radial-gradient(50% 50% at bottom center, black,  transparent)',
        },
      });
    },
  ],
};
export default config;
