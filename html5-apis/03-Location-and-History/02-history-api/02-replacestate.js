document.getElementById("btn").onclick = () => {
  history.replaceState({ replaced: true }, "", "#replaced");
  document.getElementById("out").textContent = JSON.stringify(history.state);
};
