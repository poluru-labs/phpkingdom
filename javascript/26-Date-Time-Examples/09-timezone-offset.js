const d = new Date(2024, 0, 15, 12, 0, 0);
const offsetMin = d.getTimezoneOffset();
document.getElementById("out").textContent =
  "getTimezoneOffset(): " + offsetMin + " minutes\n" +
  "Interpretation: local = UTC " + (offsetMin <= 0 ? "+" : "-") + Math.abs(offsetMin / 60) + "h (approx)";
