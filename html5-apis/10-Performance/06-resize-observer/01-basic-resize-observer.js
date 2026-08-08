const box = document.getElementById("box");
const ro = new ResizeObserver((entries) => {
  const cr = entries[0].contentRect;
  document.getElementById("out").textContent = Math.round(cr.width) + "×" + Math.round(cr.height);
});
ro.observe(box);
