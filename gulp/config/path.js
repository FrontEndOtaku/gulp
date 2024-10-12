const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		static: `${buildFolder}/assets/static/`,
		pug: `${buildFolder}/`,
		html: `${buildFolder}/`,
	},
	src: {
		static: `${srcFolder}/assets/static/**/*.*`,
		pug: `${srcFolder}/pug/pages/*.pug`,
		html: `${srcFolder}/html/pages/*.html`,
	},
	watch: {
		static: `${srcFolder}/assets/static/**/*.*`,
		pug: `${srcFolder}/pug/**/*.pug`,
		html: `${srcFolder}/html/**/*.html`,
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
};
