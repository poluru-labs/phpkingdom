function demo(a = b, b = 2) {
  return [a, b];
}
try {
  demo();
} catch (e) {
  document.getElementById("out").textContent =
    "demo() throws: " + e.message + "\n" +
    "demo(1) => [" + (function (a = 1, b = 2) { return [a, b]; })(1) + "]";
}
