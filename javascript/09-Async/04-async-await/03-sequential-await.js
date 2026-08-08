function wait(ms, label) {
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(label); }, ms);
  });
}
async function run() {
  const a = await wait(150, "A");
  const b = await wait(150, "B");
  document.getElementById("out").textContent = a + " then " + b;
}
run();
