window.addEventListener("popstate", (e) => {
  document.getElementById("out").textContent = "popstate " + JSON.stringify(e.state);
});
document.getElementById("go").onclick = () => {
  history.pushState({ n: Date.now() }, "", "#spa-" + Date.now());
  document.getElementById("out").textContent = "pushed; press Back";
};
