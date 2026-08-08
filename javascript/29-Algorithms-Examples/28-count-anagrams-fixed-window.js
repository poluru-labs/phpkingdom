function countAnagramWindows(s, p) {
  if (p.length > s.length) return 0;
  const need = new Array(26).fill(0);
  const have = new Array(26).fill(0);
  const idx = c => c.charCodeAt(0) - 97;
  for (const c of p) need[idx(c)]++;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    have[idx(s[i])]++;
    if (i >= p.length) have[idx(s[i - p.length])]--;
    if (i >= p.length - 1 && have.every((v, j) => v === need[j])) count++;
  }
  return count;
}
const s = "cbaebabacd", p = "abc";
document.getElementById("out").textContent =
  "s: " + JSON.stringify(s) + "\n" +
  "p: " + JSON.stringify(p) + "\n" +
  "anagram windows: " + countAnagramWindows(s, p);
