/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#050608',
          900: '#080a0f',
          800: '#0d1020',
          700: '#131a2e',
          600: '#1c2440',
          500: '#252b4a',
        },
        gold: {
          200: '#fef7e0',
          300: '#f5d98a',
          400: '#e8c347',
          500: '#d4a017',
          600: '#c9922a',
          700: '#b8860b',
          800: '#9a6f0a',
          900: '#7a5808',
        },
        cobalt: {
          400: '#4a7ff5',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e3a8a',
          800: '#172859',
          900: '#0f1d4a',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(201, 146, 42, 0.12)',
        'gold-md': '0 0 30px rgba(201, 146, 42, 0.18)',
        'gold-lg': '0 0 60px rgba(201, 146, 42, 0.22)',
        card: '0 4px 24px rgba(0, 0, 0, 0.55), 0 1px 3px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
