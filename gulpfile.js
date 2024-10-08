// Импорт основных модулей
import { task } from "gulp";

// Импорт gulp задач
import { copy } from "./gulp/tasks/copy.js";

task("default", copy);
