import { dest, src } from "gulp";
import fonter from "gulp-fonter";
import plumber from "gulp-plumber";
import ttf2woffGulp from "gulp-ttf2woff";
import ttf2woff2Gulp from "gulp-ttf2woff2";

import { errorHandler } from "../config/errorHandler.js";
import { path } from "../config/path.js";

export const otfToTtf = () => {
	return src(path.src.fontsOtf, { encoding: false })
		.pipe(plumber(errorHandler("FONTS Otf Error")))
		.pipe(
			fonter({
				formats: ["ttf"],
			})
		)
		.pipe(dest(`${path.srcFolder}/assets/fonts/`));
};

export const ttfToWoff = () => {
	return src(path.src.fontsTtf, { encoding: false })
		.pipe(plumber(errorHandler("Font ttf Error")))
		.pipe(ttf2woffGulp())
		.pipe(dest(path.build.fonts))
		.pipe(src(path.src.fontsTtf))
		.pipe(ttf2woff2Gulp())
		.pipe(dest(path.build.fonts));
};
