function compress(s) {
  if (!s) return "";
  let out = "", count = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) count++;
    else {
      out += s[i - 1] + count;
      count = 1;
    }
  }
  return out.length < s.length ? out : s;
}
document.getElementById("out").textContent = compress("aabcccccaaa");
