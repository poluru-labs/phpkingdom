function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
document.getElementById("out").textContent = "double(9) = " + double(9);
