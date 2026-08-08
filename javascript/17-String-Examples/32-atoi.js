function myAtoi(s) {
  const m = s.trim().match(/^[+-]?\d+/);
  if (!m) return 0;
  return Number(m[0]);
}
document.getElementById("out").textContent =
  myAtoi("   -42") + " / " + myAtoi("4193 with words");
