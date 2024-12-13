import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        // Custom colors if needed
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#24292e',
            a: {
              color: '#0366d6',
              textDecoration: 'none',
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
    '@import': `url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')`,
    body: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    },
  },
} as Options;
