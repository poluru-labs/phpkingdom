function diffDays(a, b) {
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((utcB - utcA) / (1000 * 60 * 60 * 24));
}
const a = new Date(2024, 0, 15);
const b = new Date(2024, 1, 5);
document.getElementById("out").textContent = "Days from Jan 15 to Feb 5, 2024: " + diffDays(a, b);
