const tips = [
  "for — known start/end/step",
  "while — unknown iterations / conditions",
  "do…while — run at least once",
  "for…of — values (arrays, strings)",
  "for…in — object keys (use hasOwn)",
  "break / continue — early exit / skip",
  "nested loops — grids, pairs, sorts",
  "prefer clear bounds & avoid off-by-one",
];
document.getElementById("out").textContent = tips.map((t, i) => (i + 1) + ". " + t).join("\n");
