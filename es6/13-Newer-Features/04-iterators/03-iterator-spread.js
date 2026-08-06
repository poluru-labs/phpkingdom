document.getElementById("out").textContent =
  [..."hi"].join("-") + " | " + [...new Set([1, 1, 2])].join(",");
