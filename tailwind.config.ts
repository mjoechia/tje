import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1F3D2B',
        'forest-800': '#2A5239',
        'forest-900': '#0f2016',
        gold: '#C8A96A',
        'gold-light': '#E3C88A',
        'gold-pale': '#F5EDD6',
        cream: '#F7F3ED',
        'cream-dark': '#EDE8E0',
        charcoal: '#2B2B2B',
        'charcoal-light': '#4A4A4A',
        sage: '#8FAF9A',
        'sage-light': '#B8D4C3',
        'sage-pale': '#E8F2EC',
      },
      fontFamily: {
        headline: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Helvetica Neue', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
