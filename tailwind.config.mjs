/**
 * Design tokens: honey (single accent) + ink (warm neutrals) + serif headings.
 * This file is the single source of truth. apps/website consumes it via `presets`.
 */
const honey = {
  50: '#FFF9E8',
  100: '#FEF0C3',
  200: '#FCE08B',
  300: '#F9CB50',
  400: '#F5B52B',
  500: '#EBA010',
  600: '#C47F0A',
  700: '#955F0B',
  800: '#734910',
  900: '#583913',
  950: '#3A250C'
};
const ink = {
  50: '#FAF8F3',
  100: '#F2EFE8',
  200: '#E4E0D5',
  300: '#C9C4B6',
  400: '#9A9588',
  500: '#6E6A5E',
  600: '#57534A',
  700: '#403D36',
  800: '#2A2823',
  900: '#1C1B17',
  950: '#121110'
};

const serifStack = "Fraunces, Georgia, Cambria, 'Times New Roman', serif";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Text/links on light backgrounds use honey-700 or darker (AA); honey-400/500 are for fills,
        // borders and dark-mode text.
        honey,
        // Warm neutrals. `ink-50` is the off-white page background, `ink-900` the dark-mode background.
        ink,
        // Alias the stock gray scale to ink so every `gray-*` utility, prose and typography default is warm.
        gray: ink
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Headings (h1-h3, prose headings, wordmark). Self-hosted variable font, see styles/global.css.
        serif: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'] // keep in sync with serifStack
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: theme('colors.ink.700'),
            lineHeight: '1.75',
            fontSize: '1.0625rem',
            h1: {
              fontFamily: serifStack,
              fontWeight: '600',
              letterSpacing: '-0.02em',
              fontSize: '2.25rem',
              marginTop: '0',
              marginBottom: '0.875rem'
            },
            h2: {
              fontFamily: serifStack,
              fontWeight: '600',
              letterSpacing: '-0.01em',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem'
            },
            h3: {
              fontFamily: serifStack,
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem'
            },
            // Brand link/quote colours via the plugin's variables so prose-invert keeps working.
            '--tw-prose-links': theme('colors.honey.700'),
            '--tw-prose-invert-links': theme('colors.honey.400'),
            '--tw-prose-quote-borders': theme('colors.honey.500'),
            '--tw-prose-invert-quote-borders': theme('colors.honey.500'),
            a: {
              textDecorationColor: theme('colors.honey.500'),
              textUnderlineOffset: '3px'
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            code: {
              backgroundColor: theme('colors.ink.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '400'
            },
            'pre.astro-code': {
              marginTop: '1.5em',
              marginBottom: '1.5em'
            },
            '.astro-code code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              fontSize: 'inherit',
              fontWeight: 'inherit'
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.ink.300'),
            h1: { color: theme('colors.ink.100') },
            h2: { color: theme('colors.ink.100') },
            h3: { color: theme('colors.ink.100') },
            h4: { color: theme('colors.ink.100') },
            strong: { color: theme('colors.ink.100') },
            code: {
              backgroundColor: theme('colors.ink.800'),
              color: theme('colors.ink.200')
            },
            a: {
              color: theme('colors.honey.400'),
              '&:hover': { color: theme('colors.honey.300') }
            },
            blockquote: {
              color: theme('colors.ink.300'),
              borderLeftColor: theme('colors.honey.500')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addComponents }) {
      addComponents({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#d1d5db transparent',
        },
        '.dark .scrollbar-thin': {
          'scrollbar-color': '#4b5563 transparent',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '6px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          'background-color': '#d1d5db',
          'border-radius': '3px',
        },
        '.dark .scrollbar-thin::-webkit-scrollbar-thumb': {
          'background-color': '#4b5563',
        }
      })
    }
  ]
};
