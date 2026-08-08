document.getElementById("out").textContent = [
  "typeof null=" + typeof null,
  "Array.isArray([])=" + Array.isArray([]),
  "typeof NaN=" + typeof NaN
].join("\n");
