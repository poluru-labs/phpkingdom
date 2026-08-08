function addMonths(date, months) {
  const copy = new Date(date.getTime());
  copy.setMonth(copy.getMonth() + months);
  return copy;
}
const start = new Date(2024, 0, 31);
const result = addMonths(start, 1);
document.getElementById("out").textContent =
  "Start: " + start.toDateString() + "\n" +
  "+1 month: " + result.toDateString() + "\n" +
  "Note: Jan 31 + 1 month => Mar 2 or Feb 29/28 (engine rolls)";
