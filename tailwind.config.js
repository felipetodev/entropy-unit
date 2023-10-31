const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        transducer: ['transducer-extended', ...fontFamily.sans]
      },
      colors: {
        entropy: {
          red: '#C70039',
          grayUnit: '#F2F2F2',
          black: '#121212',
          slateGray: '#6F7385',
          blueUnit: '#232329',
          darkBlue: '#19191C'
        },
        border: 'hsl(var(--border))'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll 60s linear infinite reverse'
      },
      keyframes: {
        'infinite-scroll': {
          to: { transform: 'translate(calc(-50% - 2.5rem))' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
