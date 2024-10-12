const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		static: `${buildFolder}/assets/static/`,
		pug: `${buildFolder}/`,
		html: `${buildFolder}/`,
		scss: `${buildFolder}/css/`,
		scripts: `${buildFolder}/scripts/`,
	},
	src: {
		static: `${srcFolder}/assets/static/**/*.*`,
		pug: `${srcFolder}/pug/pages/*.pug`,
		html: `${srcFolder}/html/pages/*.html`,
		scss: `${srcFolder}/scss/styles.scss`,
		scripts: `${srcFolder}/scripts/app.js`,
	},
	watch: {
		static: `${srcFolder}/assets/static/**/*.*`,
		pug: `${srcFolder}/pug/**/*.pug`,
		html: `${srcFolder}/html/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		scripts: `${srcFolder}/scripts/**/*.js`,
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
};
