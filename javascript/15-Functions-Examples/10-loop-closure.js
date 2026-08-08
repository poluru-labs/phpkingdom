const fns = [];
for (let i = 0; i < 3; i++) {
  fns.push(() => i);
}
document.getElementById("out").textContent =
  fns.map((fn) => fn()).join(", ");
