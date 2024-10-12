import { dest, src } from "gulp";
import replace from "gulp-replace";
import versionNumber from "gulp-version-number";
import htmlWebp from "gulp-webp-html-nosvg";

import BrowserSync from "browser-sync";
import plumber from "gulp-plumber";
import GulpPug from "gulp-pug";
import { errorHandler } from "../config/errorHandler.js";
import { path } from "../config/path.js";

export const html = () => {
	return (
		// path.stc.html - чтоб использовать обычный html
		src(path.src.pug)
			.pipe(plumber(errorHandler("HTML Error")))
			// .pipe(fileInclude())
			.pipe(
				GulpPug({
					pretty: true, //Сжатие HTML файлов
					verbose: true, //Показывать в терминале какой файл обработан
				})
			)
			.pipe(replace(/@img\//g, "./assets/images/"))
			.pipe(htmlWebp())
			.pipe(
				versionNumber({
					value: "%DT%",
					append: {
						key: "_v",
						cover: 0,
						to: ["css", "js"],
					},
					output: {
						file: "gulp/version.json",
					},
				})
			)
			.pipe(dest(path.build.html))
			.pipe(BrowserSync.stream())
	);
};
