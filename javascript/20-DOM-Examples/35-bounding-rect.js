document.getElementById("btn").onclick = () => {
  const r = document.getElementById("box").getBoundingClientRect();
  document.getElementById("out").textContent =
    "x=" + Math.round(r.x) + " y=" + Math.round(r.y) +
    " w=" + Math.round(r.width) + " h=" + Math.round(r.height);
};
