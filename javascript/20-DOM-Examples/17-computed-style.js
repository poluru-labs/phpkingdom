const cs = getComputedStyle(document.getElementById("box"));
document.getElementById("out").textContent =
  "color=" + cs.color + "\nfont-size=" + cs.fontSize;
