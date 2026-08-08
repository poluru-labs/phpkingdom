function outer() {
  const label = "outer";
  function inner() { return label; }
  return inner();
}
document.getElementById("out").textContent = outer();
