/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Space Grotesk', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'dark': {
          DEFAULT: '#1a0e08',
          100: '#2d1810',
          200: '#3d2318',
        },
        'accent': {
          DEFAULT: '#8B1538',
          light: '#B02349',
          dark: '#6B0F2A',
        },
        'brown': {
          DEFAULT: '#8b5234',
          light: '#a66a4a',
          dark: '#6b3e23',
        },
        'beige': {
          DEFAULT: '#f5f1e8',
          light: '#faf8f3',
          dark: '#e8e0d0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-organic': 'floatOrganic 20s ease-in-out infinite',
        'morph': 'morphBlob 15s ease-in-out infinite',
        'particle': 'particleFloat 12s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatOrganic: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(20px, -30px) rotate(5deg) scale(1.05)' },
          '50%': { transform: 'translate(-15px, -45px) rotate(-3deg) scale(0.95)' },
          '75%': { transform: 'translate(25px, -20px) rotate(4deg) scale(1.02)' },
        },
        morphBlob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 70% / 30% 50% 70% 60%' },
          '75%': { borderRadius: '40% 30% 60% 50% / 70% 40% 50% 30%' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'translateY(-30px) translateX(15px) rotate(180deg)', opacity: '0.6' },
          '100%': { transform: 'translateY(0) translateX(0) rotate(360deg)', opacity: '0.3' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
