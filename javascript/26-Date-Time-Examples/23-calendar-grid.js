function buildMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push("");
  for (let d = 1; d <= daysInMonth; d++) cells.push(String(d));
  while (cells.length % 7 !== 0) cells.push("");
  const rows = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7).join(" | "));
  return rows.join("\n");
}
document.getElementById("out").textContent = "January 2024 grid:\n" + buildMonthGrid(2024, 0);
