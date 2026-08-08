function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}
const morning = new Date(2024, 0, 15, 8, 0, 0);
const evening = new Date(2024, 0, 15, 20, 0, 0);
const next = new Date(2024, 0, 16);
document.getElementById("out").textContent =
  "Morning vs evening: " + isSameDay(morning, evening) + "\n" +
  "Morning vs next day: " + isSameDay(morning, next);
