function isAlpha(s) {
  return /^[A-Za-z]+$/.test(s);
}
document.getElementById("out").textContent =
  isAlpha("JavaScript") + " / " + isAlpha("JS123");
