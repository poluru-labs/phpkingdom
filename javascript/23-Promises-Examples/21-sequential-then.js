function step(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), ms);
  });
}
step("A", 100)
  .then((a) => step(a + "->B", 100))
  .then((ab) => step(ab + "->C", 100))
  .then((result) => {
    document.getElementById("out").textContent = result;
  });
