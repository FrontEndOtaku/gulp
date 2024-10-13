// Импорт основных модулей
import { parallel, series, task } from "gulp";

// Импорт gulp задач
import { clean } from "./gulp/tasks/clean.js";
import { copy } from "./gulp/tasks/copy.js";
import { otfToTtf, ttfToWoff } from "./gulp/tasks/fonts.js";
import { html } from "./gulp/tasks/html.js";
import { images } from "./gulp/tasks/images.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { server } from "./gulp/tasks/server.js";
import { styles } from "./gulp/tasks/styles.js";
import { svg } from "./gulp/tasks/svg.js";
import { watching } from "./gulp/tasks/watching.js";

const fonts = series(otfToTtf, ttfToWoff);

const dev = series(
	clean,
	fonts,
	parallel(copy, html, styles, scripts, images, svg),
	parallel(watching, server)
);

task("default", dev);
