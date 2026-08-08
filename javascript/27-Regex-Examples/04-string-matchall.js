const text = "2024-01-15 and 2025-12-31";
const re = /(\d{4})-(\d{2})-(\d{2})/g;
const lines = [];
for (const m of text.matchAll(re)) {
  lines.push("full=" + m[0] + " year=" + m[1] + " @index=" + m.index);
}
document.getElementById("out").textContent = lines.join("\n");
