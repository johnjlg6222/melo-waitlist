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
        // Backgrounds
        cream: {
          DEFAULT: '#FDF6E3',
          light: '#FEF3E2',
        },
        ivory: '#FEFCF9',
        // Primary
        purple: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        coral: {
          DEFAULT: '#E8A5A0',
          light: '#F0B8B4',
        },
        pink: {
          DEFAULT: '#FDA4AF',
          light: '#FFC1C8',
        },
        // Accents
        mint: {
          DEFAULT: '#B8E8D1',
          light: '#D1F0E3',
        },
        lavender: {
          DEFAULT: '#E8D4F0',
          light: '#F0E4F6',
        },
        peach: {
          DEFAULT: '#FFE4D6',
          light: '#FFF0E8',
        },
        // Text
        charcoal: '#2D2D3A',
        slate: '#6B6B7B',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #FDF6E3 0%, #FFE4D6 50%, #E8D4F0 100%)',
      },
    },
  },
  plugins: [],
}
export default config
