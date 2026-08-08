function isArmstrong(n) {
  const digits = String(n).split("").map(Number);
  const p = digits.length;
  let sum = 0;
  for (const d of digits) sum += d ** p;
  return sum === n;
}
document.getElementById("out").textContent =
  "153 → " + isArmstrong(153) + "\n123 → " + isArmstrong(123);
