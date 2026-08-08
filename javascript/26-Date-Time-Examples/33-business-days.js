function countBusinessDays(start, end) {
  let count = 0;
  const cur = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const last = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  while (cur <= last) {
    const day = cur.getDay();
    if (day !== 0 && day !== 6) count++;
    cur.setDate(cur.getDate() + 1);
  }
  return count;
}
const s = new Date(2024, 0, 15); // Mon
const e = new Date(2024, 0, 19); // Fri
document.getElementById("out").textContent =
  "Jan 15–19, 2024 (Mon–Fri): " + countBusinessDays(s, e) + " business days";
