const rows = [];
for (let i = 1; i <= 4; i++) {
  const cells = [];
  for (let j = 1; j <= 4; j++) cells.push(String(i * j).padStart(2, " "));
  rows.push(cells.join(" "));
}
document.getElementById("out").textContent = rows.join("\n");
