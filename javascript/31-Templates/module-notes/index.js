document.getElementById("out").textContent = [
  "export const VERSION = 1;",
  "export function boot() {}",
  "import { boot } from './app.js';",
  "import * as app from './app.js';"
].join("\n");
