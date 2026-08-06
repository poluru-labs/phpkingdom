async function run() {
  if (typeof Array.fromAsync !== "function") {
    document.getElementById("out").textContent = "unsupported";
    return;
  }
  const arr = await Array.fromAsync([1, 2, 3], async n => n * 10);
  document.getElementById("out").textContent = String(arr);
}
run();
