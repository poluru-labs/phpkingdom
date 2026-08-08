function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
}
const d = new Date(2024, 0, 15);
document.getElementById("out").textContent = "Start of month: " + startOfMonth(d).toString();
