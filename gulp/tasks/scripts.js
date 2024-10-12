import BrowserSync from "browser-sync";
import { dest, src } from "gulp";
import plumber from "gulp-plumber";
import webpack from "webpack-stream";

import { errorHandler } from "../config/errorHandler.js";
import { path } from "../config/path.js";

export const scripts = () => {
	return src(path.src.scripts, { sourcemaps: true })
		.pipe(plumber(errorHandler("JS Error")))
		.pipe(
			webpack({
				mode: "development",
				output: {
					filename: "app.min.js",
				},
			})
		)
		.pipe(dest(path.build.scripts))
		.pipe(BrowserSync.stream());
};
