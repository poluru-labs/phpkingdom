const gl = document.getElementById("c").getContext("webgl") ||
  document.getElementById("c").getContext("experimental-webgl");
document.getElementById("out").textContent = gl
  ? "WebGL OK vendor=" + gl.getParameter(gl.VENDOR)
  : "WebGL unavailable";
