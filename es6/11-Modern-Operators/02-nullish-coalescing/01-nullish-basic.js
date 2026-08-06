document.getElementById("out").textContent = [
  "null ?? 'x' = " + (null ?? "x"),
  "0 || 'x' = " + (0 || "x"),
  "0 ?? 'x' = " + (0 ?? "x"),
].join("\n");
