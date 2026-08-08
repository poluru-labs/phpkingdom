const a = [];
a[2] = "x";
document.getElementById("out").textContent =
  "length=" + a.length + "\n" +
  "map => [" + a.map((v) => v || "_").join(",") + "]\n" +
  "keys => [" + [...a.keys()].join(",") + "]";
