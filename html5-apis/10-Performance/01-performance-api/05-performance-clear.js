document.getElementById("go").onclick = () => {
  performance.clearMarks();
  performance.clearMeasures();
  document.getElementById("out").textContent = "marks=" + performance.getEntriesByType("mark").length;
};
