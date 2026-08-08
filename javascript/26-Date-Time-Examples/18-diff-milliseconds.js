const start = new Date(2024, 0, 15, 10, 0, 0);
const end = new Date(2024, 0, 15, 14, 30, 45);
const ms = end - start;
document.getElementById("out").textContent =
  "Start: " + start.toLocaleTimeString() + "\n" +
  "End: " + end.toLocaleTimeString() + "\n" +
  "Difference (ms): " + ms + "\n" +
  "Hours: " + (ms / (1000 * 60 * 60)).toFixed(2);
