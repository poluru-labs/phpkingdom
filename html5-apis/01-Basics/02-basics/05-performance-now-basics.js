document.getElementById("go").onclick = () => {
  const t0 = performance.now();
  let x = 0; for (let i = 0; i < 1e6; i++) x += i;
  const ms = (performance.now() - t0).toFixed(2);
  document.getElementById("out").textContent = "loop ~" + ms + "ms (x=" + x + ")";
};
