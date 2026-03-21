/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'abyss':          '#0A0F1E',
        'navy':           '#0F1629',
        'navy-mid':       '#141D35',
        'border-dark':    '#1E2A45',
        // Accents
        'accent-cyan':    '#00D4FF',
        'accent-violet':  '#7C3AED',
        'accent-teal':    '#0EA5E9',
        // Text
        'ice':            '#F0F4FF',
        'slate-mist':     '#8892B0',
        'muted-indigo':   '#4A5568',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body':    ['Inter', 'sans-serif'],
        'mono':    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'pulse-ring':   'pulse-ring 2s ease-out infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'bounce-slow':  'bounce 2.5s ease-in-out infinite',
        'fade-in-up':   'fade-in-up 0.6s ease forwards',
        'drift':        'drift 20s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%':      { transform: 'translate(10px, -15px) rotate(90deg)' },
          '50%':      { transform: 'translate(-8px, -25px) rotate(180deg)' },
          '75%':      { transform: 'translate(-15px, -10px) rotate(270deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'accent-gradient':  'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
        'hero-glow':        'radial-gradient(ellipse at 60% 40%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,212,255,0.08) 0%, transparent 50%)',
        'card-hover':       'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))',
        'section-glow':     'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.08) 50%, transparent 100%)',
      },
      boxShadow: {
        'glow-cyan':    '0 0 20px rgba(0,212,255,0.25), 0 0 60px rgba(0,212,255,0.1)',
        'glow-violet':  '0 0 20px rgba(124,58,237,0.25), 0 0 60px rgba(124,58,237,0.1)',
        'card-hover':   '0 0 0 1px rgba(0,212,255,0.2), 0 20px 40px rgba(0,0,0,0.4)',
        'card-default': '0 4px 24px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
