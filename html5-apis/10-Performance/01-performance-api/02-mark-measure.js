performance.mark("start-demo");
performance.mark("end-demo");
performance.measure("demo", "start-demo", "end-demo");
const m = performance.getEntriesByName("demo")[0];
document.getElementById("out").textContent =
  "measure duration=" + m.duration.toFixed(3) + "ms";
