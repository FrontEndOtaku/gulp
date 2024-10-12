import { watch } from "gulp";

import { path } from "../config/path.js";

import { copy } from "./copy.js";
import { html } from "./html.js";

export const watching = () => {
	watch(path.watch.static, copy);
	watch(path.watch.pug, html);
};
