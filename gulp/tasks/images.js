import BrowserSync from "browser-sync";
import { dest, src } from "gulp";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import plumber from "gulp-plumber";
import webp from "gulp-webp";

import { errorHandler } from "../config/errorHandler.js";
import { path } from "../config/path.js";

export const images = async () => {
	return src(path.src.images, { encoding: false })
		.pipe(plumber(errorHandler("IMAGE Error")))
		.pipe(newer(path.build.images))
		.pipe(webp())
		.pipe(dest(path.build.images))
		.pipe(src(path.src.images, { encoding: false }))
		.pipe(newer(path.build.images))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3,
			})
		)
		.pipe(dest(path.build.images))
		.pipe(src(path.src.svg, { encoding: false }))
		.pipe(dest(path.build.images))
		.pipe(BrowserSync.stream());
};
