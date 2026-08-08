const lines = [];
for (let i = 1; i <= 30; i++) {
  let s = "";
  if (i % 3 === 0) s += "Fizz";
  if (i % 5 === 0) s += "Buzz";
  lines.push(s || String(i));
}
document.getElementById("out").textContent = lines.join(", ");
