const multiply = (factor) => (n) => n * factor;
const times3 = multiply(3);
document.getElementById("out").textContent = "times3(4)=" + times3(4);
