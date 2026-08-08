function sumAll(first, ...rest) {
  return first + rest.reduce((a, b) => a + b, 0);
}
document.getElementById("out").textContent = "sumAll(1,2,3,4) = " + sumAll(1, 2, 3, 4);
