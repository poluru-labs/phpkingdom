function tick(n) {
  return new Promise((resolve) => setTimeout(() => resolve(n), 80));
}
async function main() {
  const out = [];
  for (const n of [1, 2, 3]) {
    out.push(await tick(n));
  }
  document.getElementById("out").textContent = out.join(" then ");
}
main();
