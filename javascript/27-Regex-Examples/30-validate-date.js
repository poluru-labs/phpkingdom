const dates = ["2026-07-19", "2026-13-01", "26-07-19", "2026-02-30"];
const re = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
function valid(d) {
  const m = re.exec(d);
  if (!m) return false;
  const dt = new Date(d + "T00:00:00Z");
  return dt.toISOString().startsWith(d);
}
const results = dates.map(d => d + " => " + valid(d));
document.getElementById("out").textContent = results.join("\n");
