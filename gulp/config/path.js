const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		static: `${buildFolder}/assets/static/`,
	},
	src: {
		static: `${srcFolder}/assets/static/**/*.*`,
	},
	watch: {},
	clean: buildFolder,
	buildFolder,
	srcFolder,
};
