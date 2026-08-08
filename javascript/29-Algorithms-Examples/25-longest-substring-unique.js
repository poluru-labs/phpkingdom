function lengthOfLongest(s) {
  const last = new Map();
  let start = 0, best = 0;
  for (let i = 0; i < s.length; i++) {
    if (last.has(s[i])) start = Math.max(start, last.get(s[i]) + 1);
    last.set(s[i], i);
    best = Math.max(best, i - start + 1);
  }
  return best;
}
const s = "abcabcbb";
document.getElementById("out").textContent =
  "string: " + JSON.stringify(s) + "\n" +
  "longest unique length: " + lengthOfLongest(s);
