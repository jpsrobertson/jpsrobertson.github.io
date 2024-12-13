import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        // Custom colors if needed
      },
      fontFamily: {
        sans: ['Sono', 'monospace'],
        display: ['"Playfair Display"', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#24292e',
            h1: {
              fontFamily: '"Playfair Display", serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: '"Playfair Display", serif',
              fontWeight: '600',
            },
            h3: {
              fontFamily: '"Playfair Display", serif',
              fontWeight: '600',
            },
            p: {
              fontFamily: 'Sono, monospace',
              fontWeight: '400',
            },
            li: {
              fontFamily: 'Sono, monospace',
              fontWeight: '400',
            },
            a: {
              color: '#0366d6',
              textDecoration: 'none',
              fontFamily: 'Sono, monospace',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Sono:wght@400;500;600&display=swap')`,
    body: {
      fontFamily: 'Sono, monospace',
      fontOpticalSizing: 'auto',
      fontVariationSettings: '"MONO" 1',
    },
  },
} as Options;
