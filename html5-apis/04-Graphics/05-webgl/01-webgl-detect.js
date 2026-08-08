const c = document.createElement("canvas");
const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
document.getElementById("out").textContent = "WebGL: " + !!gl;
