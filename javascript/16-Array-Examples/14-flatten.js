const nested = [1, [2, [3, 4]], 5];
document.getElementById("out").textContent =
  "flat(1)=[" + nested.flat(1) + "], flat(Infinity)=[" + nested.flat(Infinity) + "]";
