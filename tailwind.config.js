/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F1EB',
          100: '#EBE1D6', 
          200: '#D7C3AD',
          300: '#C3A584',
          400: '#AF875B',
          500: '#9B6932',
          600: '#7C5428',
          700: '#5D3F1E',
          800: '#3E2A14',
          900: '#1F150A'
        },
        mint: {
          50: '#F0F9F7',
          100: '#E1F3EF',
          200: '#C3E7DF',
          300: '#A7D2CB',
          400: '#89BDB7',
          500: '#6BA8A3',
          600: '#568682',
          700: '#406562',
          800: '#2B4341',
          900: '#152221'
        },
        rose: {
          50: '#FDF7F6',
          100: '#FAEFED',
          200: '#F5DFDB',
          300: '#F2D7D5',
          400: '#EDCFC9',
          500: '#E8C7BD',
          600: '#BA9F97',
          700: '#8B7771',
          800: '#5D504B',
          900: '#2E2825'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};