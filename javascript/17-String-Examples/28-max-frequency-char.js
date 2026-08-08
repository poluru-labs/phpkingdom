function maxFreqChar(s) {
  const map = {};
  let best = "", bestCount = 0;
  for (const ch of s.replace(/\s/g, "")) {
    map[ch] = (map[ch] || 0) + 1;
    if (map[ch] > bestCount) { bestCount = map[ch]; best = ch; }
  }
  return best + " (" + bestCount + ")";
}
document.getElementById("out").textContent = maxFreqChar("success");
