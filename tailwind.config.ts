import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deb)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-30%)',
          },
          '20%': {
            transform: 'translateX(70%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(60%) translateY(40%)',
          },
          '75%': {
            transform: 'translateX(30%) translateY(20%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-30%)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      transitionTimingFunction: {
        smart: 'cubic-bezier(0.45, 1.65, 0.6, 1)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
          active: 'var(--secondary-active)',
        },
        card: {
          DEFAULT: 'var(--card)',
          active: 'var(--card-active)',
          text: 'var(--card-text)',
          foreground: 'var(--card-foreground)',
        },
        action: {
          DEFAULT: 'var(--action)',
          active: 'var(--action-active)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
