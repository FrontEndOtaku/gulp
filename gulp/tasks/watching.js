import { watch } from "gulp";

import { path } from "../config/path.js";
import { copy } from "./copy.js";

export const watching = () => {
	watch(path.watch.static, copy);
};
