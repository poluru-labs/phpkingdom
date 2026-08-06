async function run() {
  if (typeof Array.fromAsync !== "function") {
    document.getElementById("out").textContent = "Array.fromAsync not supported here";
    return;
  }
  const arr = await Array.fromAsync([
    Promise.resolve(1),
    Promise.resolve(2),
  ]);
  document.getElementById("out").textContent = String(arr);
}
run();
