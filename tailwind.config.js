/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        omnicyan: '#78D1E1',
        omnipink: '#FF79C6',
        omniblack: '#151718',
        omnigreen: '#67E480',
        omnililac: '#AE92EF',
        omnipurple: '#875FE7',
        omniyellow: '#E7DE79',
        omnicomment: '#201B2D',
        omniforeground: '#E1E1E6',
        omnibackground: '#13111B',
      },
      fontFamily: ['Rubic', 'sans-serif'],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440pd' },
      animation: {
        fadeIn: 'fadeIn 1.5s',
        bounce:
          'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
        slideUp: 'slideUp 0.5s',
        slideUpEaseInOut: 'slideUp 0.5s ease-in-out',
        slideUpCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      animationDelay: {
        0: '0s',
        2: '0.2s',
        4: '0.4s',
        6: '0.6s',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
