function countSubstring(text, sub) {
  if (!sub) return 0;
  let count = 0, i = 0;
  while ((i = text.indexOf(sub, i)) !== -1) {
    count++;
    i += sub.length;
  }
  return count;
}
document.getElementById("out").textContent = String(countSubstring("ababababa", "aba"));
