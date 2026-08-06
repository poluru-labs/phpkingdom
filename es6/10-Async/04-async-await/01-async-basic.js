async function load() {
  const v = await Promise.resolve(42);
  document.getElementById("out").textContent = "v=" + v;
}
load();
