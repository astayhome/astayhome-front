// @ts-nocheck
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      arround: '0 8px 25px rgba(0,0,0,0.2)',
      'arround-bold': '0 10px 28px rgba(0,0,0,0.3)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      neutral: colors.neutral,
      rose: colors.rose,
      zinc: colors.zinc,
      gray: {
        ...colors.gray,
        100: '#F7F7F7',
        200: '#DDDDDD',
        300: '#717171',
        400: '#484848',
        500: '#222222',
      },
      primary: '#FF385C',
      'transparent-black': 'rgba(0,0,0,0.4)',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      inset: {
        full: 'top:0;left:0;right:0;bottom:0;'
      },
      colors: {
        gold: 'var(--color-gold)',
        gold80: 'var(--color-gold-80)',
        gold50: 'var(--color-gold-50)',
        primary: 'var(--color-primary)',
        primary80: 'var(--color-primary-80)',
        primary50: 'var(--color-primary-50)',
        bgAccent: 'var(--color-bg-accent)',
        bgPrim: 'var(--color-white)',
        active: 'var(--color-active)',
        accent: 'var(--color-accent)',
        textPrim: 'var(--color-text)',
        placeholder: 'var(--color-placeholder)',
        stroke: 'var(--color-stroke)',
        grayPrim: 'var(--color-gray)',
        'gray-light': 'var(--color-light-gray)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
      },
    },
    screens: {
      xs: '350px',
      // => @media (min-width: 435px) { ... }
      sm: '640px',
      md: '770px',
      lg: '1024px',
      xmd: '1150px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1975px',
      // => @media (min-width: 1536px) { ... }

      searchbar: '880px',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 16px',
          '@screen sm': {
            padding: '0 24px',
          },
          '@screen md': {
            padding: '0 40px',
          },
          '@screen lg': {},
          '@screen xl': {
            padding: '0 72.5px',
          },
          '@screen 2xl': {
            maxWidth: '1760px',
          },
        },
        '.inset-full': {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
        }
      });
    },
  ],
} satisfies Config;
