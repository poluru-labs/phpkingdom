document.getElementById("go").onclick = () => {
  history.replaceState({ page: "demo" }, "", location.pathname + "?demo=1");
  document.getElementById("out").textContent = location.href + "\nstate=" + JSON.stringify(history.state);
};
