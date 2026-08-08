const d = new Date(2024, 0, 15, 14, 30, 45);
const out = document.getElementById("out");
out.textContent =
  "new Date(2024, 0, 15, 14, 30, 45)\n" +
  "toString: " + d.toString() + "\n" +
  "getTime(): " + d.getTime();
