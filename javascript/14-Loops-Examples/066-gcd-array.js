function gcd(a, b) {
  while (b !== 0) { const t = b; b = a % b; a = t; }
  return a;
}
const nums = [24, 36, 60];
let g = nums[0];
for (let i = 1; i < nums.length; i++) g = gcd(g, nums[i]);
document.getElementById("out").textContent = "gcd = " + g;
