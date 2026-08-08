const d = new Date(2024, 0, 15, 14, 30, 0);
document.getElementById("out").textContent =
  "getUTCFullYear(): " + d.getUTCFullYear() + "\n" +
  "getUTCMonth(): " + d.getUTCMonth() + "\n" +
  "getUTCDate(): " + d.getUTCDate() + "\n" +
  "getUTCHours(): " + d.getUTCHours();
