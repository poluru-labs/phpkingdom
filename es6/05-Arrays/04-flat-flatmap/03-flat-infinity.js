document.getElementById("out").textContent =
  JSON.stringify([1, [2, [3, [4]]]].flat(Infinity));
