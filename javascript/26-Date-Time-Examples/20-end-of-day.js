function endOfDay(d) {
  const copy = new Date(d.getTime());
  copy.setHours(23, 59, 59, 999);
  return copy;
}
const d = new Date(2024, 0, 15, 14, 30, 45);
const eod = endOfDay(d);
document.getElementById("out").textContent =
  "Original: " + d.toString() + "\n" +
  "End of day: " + eod.toString();
