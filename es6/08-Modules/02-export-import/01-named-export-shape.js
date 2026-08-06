// Simulated named binding
const api = { version: "1.0" };
document.getElementById("out").textContent =
  "imagine: import { version } from './api.js' → " + api.version;
