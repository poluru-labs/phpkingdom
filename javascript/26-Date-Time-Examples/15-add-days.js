function addDays(date, days) {
  const copy = new Date(date.getTime());
  copy.setDate(copy.getDate() + days);
  return copy;
}
const start = new Date(2024, 0, 15);
const result = addDays(start, 10);
document.getElementById("out").textContent =
  "Start: " + start.toDateString() + "\n" +
  "+10 days: " + result.toDateString();
