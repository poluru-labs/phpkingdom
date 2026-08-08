const nums = [1,2,3,4,5];
const odds = [];
for (const n of nums) {
  if (n % 2 === 0) continue;
  odds.push(n);
}
document.getElementById("out").textContent = odds.join(",");
