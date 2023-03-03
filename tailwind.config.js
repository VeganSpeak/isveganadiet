const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./public/**/*.html"],
	plugins: [
		require('@tailwindcss/typography'),
	],
};
