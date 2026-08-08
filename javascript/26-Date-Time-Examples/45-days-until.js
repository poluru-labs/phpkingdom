function daysUntil(from, event) {
  const utcFrom = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const utcEvent = Date.UTC(event.getFullYear(), event.getMonth(), event.getDate());
  return Math.round((utcEvent - utcFrom) / (1000 * 60 * 60 * 24));
}
const today = new Date(2024, 0, 15);
const event = new Date(2024, 11, 25);
document.getElementById("out").textContent = "Days until Dec 25, 2024: " + daysUntil(today, event);
