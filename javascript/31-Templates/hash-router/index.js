function render() {
  const route = location.hash.slice(1) || "home";
  document.getElementById("out").textContent = "route=" + route;
}
window.addEventListener("hashchange", render);
render();
