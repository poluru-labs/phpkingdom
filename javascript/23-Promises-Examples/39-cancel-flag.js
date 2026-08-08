let cancelled = false;
function load() {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 300));
}
const p = load().then((data) => {
  if (cancelled) return;
  document.getElementById("out").textContent = data;
});
cancelled = true;
document.getElementById("out").textContent = "cancelled before resolve";
// keep reference so linters/engines don't drop it
void p;
