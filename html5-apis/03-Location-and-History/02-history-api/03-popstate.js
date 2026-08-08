window.addEventListener("popstate", (e) => {
  document.getElementById("out").textContent =
    "popstate: " + JSON.stringify(e.state);
});
