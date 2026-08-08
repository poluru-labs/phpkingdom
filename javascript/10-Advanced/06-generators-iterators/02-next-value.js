function* gen() { yield "a"; yield "b"; }
const it = gen();
document.getElementById("out").textContent =
  JSON.stringify(it.next()) + "\n" + JSON.stringify(it.next()) + "\n" + JSON.stringify(it.next());
