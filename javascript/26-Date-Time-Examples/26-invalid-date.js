const good = new Date(2024, 0, 15);
const bad = new Date("not-a-date");
function isValidDate(d) { return d instanceof Date && !isNaN(d.getTime()); }
document.getElementById("out").textContent =
  "Valid: " + isValidDate(good) + " (" + good + ")\n" +
  "Invalid: " + isValidDate(bad) + " (" + bad + ")";
