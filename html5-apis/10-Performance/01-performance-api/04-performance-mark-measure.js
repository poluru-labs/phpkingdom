document.getElementById("go").onclick = () => {
  performance.mark("pk-a");
  for (let i = 0; i < 5e5; i++) {}
  performance.mark("pk-b");
  performance.measure("pk-work", "pk-a", "pk-b");
  const m = performance.getEntriesByName("pk-work").pop();
  document.getElementById("out").textContent = "duration≈" + m.duration.toFixed(2) + "ms";
};
