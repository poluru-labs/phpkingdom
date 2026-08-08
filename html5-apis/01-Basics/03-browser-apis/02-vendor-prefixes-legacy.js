const has = "requestFullscreen" in document.documentElement;
document.getElementById("out").textContent =
  "requestFullscreen supported: " + has;
