const dateOnly = "2024-01-15";
const d = new Date(dateOnly);
document.getElementById("out").textContent =
  "Input: " + dateOnly + "\n" +
  "Parsed UTC ISO: " + d.toISOString() + "\n" +
  "Local date string: " + d.toDateString() + "\n" +
  "Local parts: " + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
