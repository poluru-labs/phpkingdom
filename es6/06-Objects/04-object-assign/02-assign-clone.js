const src = { x: 1 };
const copy = Object.assign({}, src);
copy.x = 9;
document.getElementById("out").textContent =
  "src=" + src.x + " copy=" + copy.x;
