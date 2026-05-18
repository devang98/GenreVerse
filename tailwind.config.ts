import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bungee', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Rubik', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paintball: {
          primary: '#ff732e',
          secondary: '#212224',
          dark: '#191919',
          light: '#f26621',
        },
      },
      boxShadow: {
        glow: '0 18px 70px rgba(14, 165, 233, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config;
