/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-bg-main': '#7358b1',
        'my-white': '#ebd8ff',
        'my-fiolet': '#5736A3',
        'my-menu-hover': '#7358b1',
      },
    },
  },
  plugins: [require('daisyui')],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         'base-100': '#5736A3',
  //       },
  //     },
  //   ],
  // },
};
