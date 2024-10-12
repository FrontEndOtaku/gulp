import browserSync from "browser-sync";

import { path } from "../config/path.js";

export const server = done => {
	browserSync.init({
		server: {
			baseDir: `${path.build.pug}`,
		},
		notify: false,
		port: 3000,
	});
};
