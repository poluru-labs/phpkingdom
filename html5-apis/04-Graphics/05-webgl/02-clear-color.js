const gl = document.getElementById("c").getContext("webgl");
if (!gl) {
  document.getElementById("out").textContent = "WebGL unavailable";
} else {
  gl.clearColor(0.06, 0.46, 0.43, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  document.getElementById("out").textContent = "cleared to teal";
}
