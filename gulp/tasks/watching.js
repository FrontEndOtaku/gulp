import { watch } from "gulp";

import { path } from "../config/path.js";

import { copy } from "./copy.js";
import { html } from "./html.js";
import { images } from "./images.js";
import { scripts } from "./scripts.js";
import { styles } from "./styles.js";
import { svg } from "./svg.js";

export const watching = () => {
	watch(path.watch.static, copy);
	watch(path.watch.pug, html);
	watch(path.watch.scss, styles);
	watch(path.watch.scripts, scripts);
	watch(path.watch.images, images);
	watch(path.watch.svg, svg);
};
