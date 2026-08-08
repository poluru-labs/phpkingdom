function countWords(s) {
  const parts = s.trim().split(/\s+/);
  return s.trim() === "" ? 0 : parts.length;
}
document.getElementById("out").textContent = String(countWords("  JavaScript string problems  "));
