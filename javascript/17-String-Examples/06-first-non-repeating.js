function firstUniqueChar(s) {
  const map = {};
  for (const ch of s) map[ch] = (map[ch] || 0) + 1;
  for (const ch of s) if (map[ch] === 1) return ch;
  return null;
}
document.getElementById("out").textContent = String(firstUniqueChar("swiss"));
