async function run() {
  async function* gen() {
    yield 1;
    yield 2;
  }
  const vals = [];
  for await (const n of gen()) vals.push(n);
  document.getElementById("out").textContent = vals.join(",");
}
run();
