function factorialTail(n, acc = 1) {
  while (n > 1) {
    acc *= n;
    n -= 1;
  }
  return acc;
}
document.getElementById("out").textContent = "6! = " + factorialTail(6);
