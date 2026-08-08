function toggleCase(s) {
  return [...s].map((ch) =>
    ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
  ).join("");
}
document.getElementById("out").textContent = toggleCase("PhpKingdom");
