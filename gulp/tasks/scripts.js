import BrowserSync from "browser-sync";
import { dest, src } from "gulp";
import gulpIf from "gulp-if";
import plumber from "gulp-plumber";
import webpack from "webpack-stream";

import { isBuild } from "../../gulpfile.js";
import { errorHandler } from "../config/errorHandler.js";
import { path } from "../config/path.js";

export const scripts = () => {
	return src(path.src.scripts, { sourcemaps: isBuild ? false : true })
		.pipe(plumber(errorHandler("JS Error")))
		.pipe(
			webpack({
				mode: isBuild ? "production" : "development",
				output: {
					filename: "app.min.js",
				},
			})
		)
		.pipe(dest(path.build.scripts))
		.pipe(gulpIf(!isBuild, BrowserSync.stream()));
};
