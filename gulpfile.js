// Импорт основных модулей
import { parallel, series, task } from "gulp";

// Импорт gulp задач
import { clean } from "./gulp/tasks/clean.js";
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { watching } from "./gulp/tasks/watching.js";

const dev = series(clean, parallel(copy, html), parallel(watching, server));

task("default", dev);
