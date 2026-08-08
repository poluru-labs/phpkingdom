function* idGenerator(start = 1) {
  let id = start;
  while (true) yield id++;
}
const gen = idGenerator(100);
document.getElementById("out").textContent =
  [gen.next().value, gen.next().value, gen.next().value].join(", ");
