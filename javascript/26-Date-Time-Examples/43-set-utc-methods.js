const d = new Date(2024, 0, 15, 0, 0, 0);
d.setUTCFullYear(2024, 0, 20);
d.setUTCHours(12, 0, 0, 0);
document.getElementById("out").textContent =
  "After UTC setters: " + d.toString() + "\n" +
  "ISO: " + d.toISOString();
