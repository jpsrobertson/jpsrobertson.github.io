import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sono', 'monospace'],
        display: ['"Noto Serif"', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(var(--slate-200))',
            h1: {
              fontFamily: '"Noto Serif", serif',
              fontWeight: '180',
              color: 'rgb(var(--slate-100))',
            },
            h2: {
              fontFamily: '"Noto Serif", serif',
              fontWeight: '180',
              color: 'rgb(var(--slate-100))',
            },
            h3: {
              fontFamily: '"Noto Serif", serif',
              fontWeight: '180',
              color: 'rgb(var(--slate-100))',
            },
            p: {
              fontFamily: 'Sono, monospace',
              fontWeight: '300',
              color: 'rgb(var(--slate-300))',
            },
            li: {
              fontFamily: 'Sono, monospace',
              fontWeight: '300',
              color: 'rgb(var(--slate-300))',
            },
            a: {
              color: 'rgb(var(--slate-300))',
              textDecoration: 'none',
              fontFamily: 'Sono, monospace',
              '&:hover': {
                color: 'rgb(var(--slate-100))',
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@200;300&family=Sono:wght@400;500;600&display=swap')`,
    ':root': {
      '--slate-50': '248 250 252',
      '--slate-100': '241 245 249',
      '--slate-200': '226 232 240',
      '--slate-300': '203 213 225',
      '--slate-400': '148 163 184',
      '--slate-500': '100 116 139',
      '--slate-600': '71 85 105',
      '--slate-700': '51 65 85',
      '--slate-800': '30 41 59',
      '--slate-900': '15 23 42',
      '--slate-950': '2 6 23',
    },
    body: {
      fontFamily: 'Sono, monospace',
      fontOpticalSizing: 'auto',
      fontVariationSettings: '"MONO" 1',
      backgroundColor: 'rgb(var(--slate-900))',
      color: 'rgb(var(--slate-200))',
    },
  },
} as Options;
