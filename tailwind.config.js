/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        idol: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        idol: {
          pink: '#ec4899',
          hot: '#f43f5e',
          orange: '#f97316',
          cyan: '#06b6d4',
          gold: '#fbbf24',
          dark: '#0f0a1e',
          deeper: '#070412',
        }
      },
      boxShadow: {
        'idol-pink': '0 0 25px rgba(236, 72, 153, 0.5), 0 0 50px rgba(236, 72, 153, 0.2)',
        'idol-orange': '0 0 25px rgba(249, 115, 22, 0.5)',
        'idol-cyan': '0 0 25px rgba(6, 182, 212, 0.5)',
        'idol-gold': '0 0 20px rgba(251, 191, 36, 0.6)',
        'idol-glow': '0 0 60px rgba(236, 72, 153, 0.3), 0 0 100px rgba(249, 115, 22, 0.1)',
        'card-idol': '0 20px 60px rgba(236, 72, 153, 0.2), 0 0 0 1px rgba(236, 72, 153, 0.1)',
      },
      backgroundImage: {
        'idol-gradient': 'linear-gradient(135deg, #ec4899, #f97316)',
        'idol-hero': 'linear-gradient(160deg, #0f0a1e 0%, #1a0535 40%, #0d1a2e 100%)',
        'idol-card': 'linear-gradient(135deg, #1a0535 0%, #0f1a3e 100%)',
        'shimmer-idol': 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)',
      },
      keyframes: {
        'idol-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(236,72,153,0.3), 0 0 40px rgba(236,72,153,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(236,72,153,0.7), 0 0 80px rgba(236,72,153,0.3), 0 0 120px rgba(249,115,22,0.1)' },
        },
        'holographic': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(0.6)' },
        },
        'stage-light': {
          '0%, 100%': { opacity: '0.3', transform: 'rotate(-2deg) scaleY(1)' },
          '50%': { opacity: '0.6', transform: 'rotate(2deg) scaleY(1.05)' },
        },
        'float-idol': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        'marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'orb-move': {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(5%, 8%) scale(1.05)' },
          '66%': { transform: 'translate(-4%, 4%) scale(0.97)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          from: { transform: 'scale(0.92)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        'shimmer-sweep': {
          from: { transform: 'skewX(-15deg) translateX(-120%)' },
          to: { transform: 'skewX(-15deg) translateX(220%)' },
        },
      },
      animation: {
        'idol-glow': 'idol-glow 3s ease-in-out infinite',
        'holographic': 'holographic 4s ease infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'stage-light': 'stage-light 4s ease-in-out infinite',
        'float-idol': 'float-idol 6s ease-in-out infinite',
        'marquee': 'marquee-scroll 25s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'slide-right': 'slide-in-right 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'orb': 'orb-move 8s ease-in-out infinite',
        'shimmer-sweep': 'shimmer-sweep 0.65s ease-out forwards',
      }
    },
  },
  plugins: [],
}
