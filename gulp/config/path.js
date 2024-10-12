const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		static: `${buildFolder}/assets/static/`,
		pug: `${buildFolder}/`,
		html: `${buildFolder}/`,
		scss: `${buildFolder}/css/`,
		scripts: `${buildFolder}/scripts/`,
		images: `${buildFolder}/assets/images/`,
	},
	src: {
		static: `${srcFolder}/assets/static/**/*.*`,
		pug: `${srcFolder}/pug/pages/*.pug`,
		html: `${srcFolder}/html/pages/*.html`,
		scss: `${srcFolder}/scss/styles.scss`,
		scripts: `${srcFolder}/scripts/app.js`,
		images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/assets/images/**/*.svg`,
	},
	watch: {
		static: `${srcFolder}/assets/static/**/*.*`,
		pug: `${srcFolder}/pug/**/*.pug`,
		html: `${srcFolder}/html/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		scripts: `${srcFolder}/scripts/**/*.js`,
		images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,svg,png,webp,gif,ico}`,
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
};
