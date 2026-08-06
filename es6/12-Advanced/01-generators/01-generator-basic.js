function* gen() {
  yield 1;
  yield 2;
}
document.getElementById("out").textContent = [...gen()].join(",");
