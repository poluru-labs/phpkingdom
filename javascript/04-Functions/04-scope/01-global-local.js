const site = "global";
function demo() {
  const site = "local";
  return site;
}
document.getElementById("out").textContent = demo() + " / " + site;
