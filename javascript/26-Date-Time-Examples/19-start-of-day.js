function startOfDay(d) {
  const copy = new Date(d.getTime());
  copy.setHours(0, 0, 0, 0);
  return copy;
}
const d = new Date(2024, 0, 15, 14, 30, 45);
const sod = startOfDay(d);
document.getElementById("out").textContent =
  "Original: " + d.toString() + "\n" +
  "Start of day: " + sod.toString();
