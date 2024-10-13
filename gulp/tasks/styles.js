import BrowserSync from "browser-sync";
import { dest, src } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import sass from "gulp-dart-sass";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import gulpIf from "gulp-if";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import replace from "gulp-replace";
import webpCss from "gulp-webpcss";

import { isBuild } from "../../gulpfile.js";
import { errorHandler } from "../config/errorHandler.js";
import { path } from "../config/path.js";

export const styles = () => {
	return src(path.src.scss, { sourcemaps: isBuild ? false : true })
		.pipe(plumber(errorHandler("SCSS Error")))
		.pipe(replace(/@img\//g, "../assets/images/"))
		.pipe(
			sass({
				outputStyle: "expanded",
			})
		)
		.pipe(gulpIf(isBuild, groupCssMediaQueries()))
		.pipe(
			gulpIf(
				isBuild,
				webpCss({
					webpClass: ".webp",
					noWebpClass: ".no-webp",
				})
			)
		)
		.pipe(
			gulpIf(
				isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: true,
				})
			)
		)
		.pipe(gulpIf(isBuild, cleanCss()))
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		.pipe(dest(path.build.scss))
		.pipe(gulpIf(isBuild, BrowserSync.stream()));
};
