const ro = new ResizeObserver((entries) => {
  document.getElementById("out").textContent = entries.map(e => e.target.id + ":" + Math.round(e.contentRect.width)).join(" ");
});
ro.observe(document.getElementById("a"));
ro.observe(document.getElementById("b"));
