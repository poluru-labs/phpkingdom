const out = document.getElementById("out");
async function load() {
  throw new Error("async throw");
}
load().catch(e => {
  out.textContent = "became rejection: " + e.message;
});
