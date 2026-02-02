/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pblue: '#3b82f6',
        ppurple: '#8b5cf6',
        pgreen: '#10b981',
        pyellow: '#f59e0b',
        pblack: '#1f2937'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: theme('colors.gray.700'),
            lineHeight: '1.75',
            fontSize: '1.0625rem',
            h1: {
              fontWeight: '700',
              letterSpacing: '-0.025em',
              fontSize: '2.25rem',
              marginTop: '0',
              marginBottom: '0.875rem'
            },
            h2: {
              fontWeight: '600',
              letterSpacing: '-0.0125em',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem'
            },
            h3: {
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem'
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '400'
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              borderRadius: '0.5rem',
              padding: '1rem'
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0'
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
            h4: { color: theme('colors.gray.100') },
            strong: { color: theme('colors.gray.100') },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200')
            },
            pre: {
              backgroundColor: theme('colors.gray.800')
            },
            a: { color: theme('colors.blue.400') },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.gray.700')
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
