function overlaps(aStart, aEnd, bStart, bEnd) {
  return aStart <= bEnd && bStart <= aEnd;
}
const a0 = new Date(2024, 0, 10), a1 = new Date(2024, 0, 20);
const b0 = new Date(2024, 0, 15), b1 = new Date(2024, 0, 25);
const c0 = new Date(2024, 1, 1), c1 = new Date(2024, 1, 5);
document.getElementById("out").textContent =
  "Jan 10–20 vs Jan 15–25: " + overlaps(a0, a1, b0, b1) + "\n" +
  "Jan 10–20 vs Feb 1–5: " + overlaps(a0, a1, c0, c1);
