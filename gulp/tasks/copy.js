import { dest, src } from "gulp";

import { path } from "../config/path.js";

export const copy = () => {
	return src(path.src.static).pipe(dest(path.build.static));
};
