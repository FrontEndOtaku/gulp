const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		static: `${buildFolder}/assets/static/`,
		pug: `${buildFolder}/`,
		html: `${buildFolder}/`,
		scss: `${buildFolder}/css/`,
	},
	src: {
		static: `${srcFolder}/assets/static/**/*.*`,
		pug: `${srcFolder}/pug/pages/*.pug`,
		html: `${srcFolder}/html/pages/*.html`,
		scss: `${srcFolder}/scss/styles.scss`,
	},
	watch: {
		static: `${srcFolder}/assets/static/**/*.*`,
		pug: `${srcFolder}/pug/**/*.pug`,
		html: `${srcFolder}/html/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
};
