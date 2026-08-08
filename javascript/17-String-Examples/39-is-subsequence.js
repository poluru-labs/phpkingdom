function isSubsequence(s, t) {
  let i = 0;
  for (const ch of t) if (ch === s[i]) i++;
  return i === s.length;
}
document.getElementById("out").textContent =
  isSubsequence("abc", "ahbgdc") + " / " + isSubsequence("axc", "ahbgdc");
