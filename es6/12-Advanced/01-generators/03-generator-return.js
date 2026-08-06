function* gen() {
  yield 1;
  return "done";
}
const it = gen();
it.next();
document.getElementById("out").textContent = JSON.stringify(it.next());
