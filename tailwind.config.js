/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./src/*.{js, jsx, html}',
	'./pages/*.{js, jsx, html}',
	'./public/*.{js, jsx, html}',
	'./*.{js, jsx, html}',
	],
  theme: {
    extend: {
		backdropFilter: ['hover', 'focus'],
	},
  },
  plugins: [],
}
