/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography'), require('tailwindcss-rfs')],
}
