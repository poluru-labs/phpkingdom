function reverseString(s) {
  if (s.length <= 1) return s;
  return reverseString(s.slice(1)) + s[0];
}
const s = "recursion";
document.getElementById("out").textContent = reverseString(s);
