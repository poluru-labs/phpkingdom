function a(x, y) {}
function b(x = 1, y) {}
function c(...rest) {}
document.getElementById("out").textContent =
  "a.length=" + a.length + "\n" +
  "b.length=" + b.length + "\n" +
  "c.length=" + c.length;
