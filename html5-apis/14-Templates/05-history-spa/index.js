const view = document.getElementById("view");
function render(name) { view.textContent = "View: " + name; document.getElementById("out").textContent = location.hash; }
document.querySelectorAll("[data-route]").forEach((a) => {
  a.onclick = (e) => { e.preventDefault(); const r = a.dataset.route; history.pushState({ r }, "", "#" + r); render(r); };
});
window.addEventListener("popstate", (e) => render((e.state && e.state.r) || "home"));
render((location.hash || "#home").slice(1));
