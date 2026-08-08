const odds = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  odds.push(i);
}
document.getElementById("out").textContent = odds.join(" ");
