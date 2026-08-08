function charFrequency(s) {
  const map = {};
  for (const ch of s) map[ch] = (map[ch] || 0) + 1;
  return map;
}
document.getElementById("out").textContent = JSON.stringify(charFrequency("banana"));
