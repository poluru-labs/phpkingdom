let n = 5;
const steps = [];
while (n > 0) { steps.push(n); n--; }
document.getElementById("out").textContent = steps.join(" → ");
