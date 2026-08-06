function* gen() { yield "a"; yield "b"; }
const it = gen();
document.getElementById("out").textContent =
  it.next().value + "," + it.next().value;
