const multiply = (a) => (b) => a * b;
const triple = multiply(3);
document.getElementById("out").textContent = String(triple(7));
