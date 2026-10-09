/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F6FF',
          100: '#E0EDFE',
          200: '#BA DBFD',
          300: '#7CB9FB',
          400: '#3894F7',
          500: '#0066FF', // Primary Vivid Blue
          600: '#0052EA', // Deep Action Blue
          700: '#003FC5',
          800: '#053198',
          900: '#0B2570',
          950: '#071644',
        },
        cyanBrand: {
          50: '#F0FDFF',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#00D2FF', // Secondary Cyan
          600: '#06B6D4',
          700: '#0E7490',
        },
        goldBrand: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        navy: {
          800: '#151E2E',
          850: '#101726',
          900: '#0B1120',
          950: '#070A12',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 10px 40px -10px rgba(0, 102, 255, 0.25)',
        'cyan-glow': '0 10px 40px -10px rgba(0, 210, 255, 0.25)',
        'subtle': '0 2px 12px -2px rgba(11, 19, 43, 0.06), 0 1px 3px rgba(11, 19, 43, 0.04)',
        'card': '0 12px 32px -4px rgba(11, 24, 60, 0.08), 0 4px 12px rgba(11, 24, 60, 0.03)',
        'phone': '0 25px 60px -15px rgba(0, 50, 150, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #F0F6FF 0%, #FFFFFF 50%, #E6F4FE 100%)',
      }
    },
  },
  plugins: [],
}
