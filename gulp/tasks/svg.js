import BrowserSync from "browser-sync";
import { dest, src } from "gulp";
import plumber from "gulp-plumber";
import svgSprite from "gulp-svg-sprite";
import { errorHandler } from "../config/errorHandler.js";
import { path } from "../config/path.js";

export const svg = () => {
	return src(path.src.svg)
		.pipe(plumber(errorHandler("SVG Error")))
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: "../icons/icons.svg",
						example: true,
					},
				},
			})
		)
		.pipe(dest(path.build.images))
		.pipe(BrowserSync.stream());
};
