function minWindow(s, t) {
  const need = {};
  for (const ch of t) need[ch] = (need[ch] || 0) + 1;
  let missing = t.length, left = 0, best = "";
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (need[ch] > 0) missing--;
    need[ch] = (need[ch] || 0) - 1;
    while (missing === 0) {
      const win = s.slice(left, right + 1);
      if (!best || win.length < best.length) best = win;
      need[s[left]]++;
      if (need[s[left]] > 0) missing++;
      left++;
    }
  }
  return best;
}
document.getElementById("out").textContent = minWindow("ADOBECODEBANC", "ABC");
