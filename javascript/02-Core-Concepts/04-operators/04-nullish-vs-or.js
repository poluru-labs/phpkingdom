const a = 0 || 5;
const b = 0 ?? 5;
document.getElementById("out").textContent = "|| => " + a + "\n?? => " + b;
