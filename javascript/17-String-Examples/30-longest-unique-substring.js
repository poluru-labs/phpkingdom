function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let start = 0, best = 0;
  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i]) && seen.get(s[i]) >= start) start = seen.get(s[i]) + 1;
    seen.set(s[i], i);
    best = Math.max(best, i - start + 1);
  }
  return best;
}
document.getElementById("out").textContent = String(lengthOfLongestSubstring("abcabcbb"));
