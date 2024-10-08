// Импорт основных модулей
import { series, task } from "gulp";

// Импорт gulp задач
import { clean } from "./gulp/tasks/clean.js";
import { copy } from "./gulp/tasks/copy.js";
import { watching } from "./gulp/tasks/watching.js";

const dev = series(clean, copy, watching);

task("default", dev);
