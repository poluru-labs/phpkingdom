const o = { a: 1, b: 2 };
document.getElementById("out").textContent = [
  Object.keys(o).join(","),
  Object.values(o).join(","),
  JSON.stringify(Object.entries(o)),
].join("\n");
