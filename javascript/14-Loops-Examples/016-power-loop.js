function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) result *= base;
  return result;
}
document.getElementById("out").textContent = "2^10 = " + power(2, 10);
