function outer() {
  const msg = "outer";
  function inner() { return msg; }
  return inner();
}
document.getElementById("out").textContent = outer();
