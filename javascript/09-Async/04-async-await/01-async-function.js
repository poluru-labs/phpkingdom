function wait(ms) {
  return new Promise(function (resolve) { setTimeout(resolve, ms); });
}
async function run() {
  await wait(250);
  document.getElementById("out").textContent = "await finished";
}
run();
