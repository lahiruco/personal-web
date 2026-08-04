/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink-DEFAULT': '#111111',
        'surface-DEFAULT': '#ffffff',
        // Gumroad-inspired palette
        brand: {
          pink:    '#ff90e8',
          coral:   '#f72585',
          yellow:  '#ffd60a',
          green:   '#06d6a0',
          purple:  '#7b2d8b',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark:    '#0d0d0d',
          card:    '#f9f9f9',
          'card-dark': '#1a1a1a',
          border:  '#e5e5e5',
          'border-dark': '#2a2a2a',
        },
        ink: {
          DEFAULT: '#111111',
          muted:   '#666666',
          'muted-dark': '#999999',
          dark:    '#f0f0f0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sinhala: ['var(--font-noto-sinhala)', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'btn':  '10px',
        'xl2':  '20px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.08)',
        'card-dark': '0 2px 8px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover-dark': '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
        'glow-pink': '0 0 24px rgba(255,144,232,0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'float':   'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.DEFAULT'),
            a: { color: theme('colors.brand.coral'), textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            'h1,h2,h3,h4': { fontWeight: '700', letterSpacing: '-0.02em' },
            code: { background: theme('colors.surface.card'), padding: '2px 6px', borderRadius: '4px', fontSize: '0.875em' },
          },
        },
        invert: {
          css: {
            color: theme('colors.ink.dark'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
