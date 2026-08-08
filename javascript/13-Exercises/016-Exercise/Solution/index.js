const n = 16;
let t = [];
for (let i = 1; i <= n; i++) {
  if (i % 15 === 0) t.push("FizzBuzz");
  else if (i % 3 === 0) t.push("Fizz");
  else if (i % 5 === 0) t.push("Buzz");
  else t.push(i);
}
document.getElementById("out").textContent = t.join(" ");
