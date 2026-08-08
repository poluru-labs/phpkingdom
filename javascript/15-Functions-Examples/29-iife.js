const result = (function (a, b) {
  const sum = a + b;
  return sum * 2;
})(3, 4);
document.getElementById("out").textContent = "IIFE result = " + result;
