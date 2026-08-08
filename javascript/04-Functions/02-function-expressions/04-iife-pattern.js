const result = (function () {
  const secret = 42;
  return secret * 2;
})();
document.getElementById("out").textContent = String(result);
