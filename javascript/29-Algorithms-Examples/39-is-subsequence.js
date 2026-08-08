function isSubsequence(s, t) {
  let i = 0;
  for (let j = 0; j < t.length && i < s.length; j++) {
    if (s[i] === t[j]) i++;
  }
  return i === s.length;
}
const pairs = [["abc", "ahbgdc"], ["axc", "ahbgdc"]];
document.getElementById("out").textContent = pairs.map(([s, t]) =>
  JSON.stringify(s) + " in " + JSON.stringify(t) + " => " + isSubsequence(s, t)
).join("\n");
