function endOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999);
}
const d = new Date(2024, 0, 15);
document.getElementById("out").textContent = "End of month: " + endOfMonth(d).toString();
