document.getElementById("go").onclick = () => {
  performance.mark("tpl-a");
  for (let i = 0; i < 3e5; i++) {}
  performance.mark("tpl-b");
  performance.measure("tpl", "tpl-a", "tpl-b");
  const m = performance.getEntriesByName("tpl").pop();
  document.getElementById("out").textContent = "duration≈" + m.duration.toFixed(2) + "ms";
};
