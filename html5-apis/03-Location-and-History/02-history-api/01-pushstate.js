document.getElementById("btn").onclick = () => {
  history.pushState({ page: 2 }, "", "#page-2");
  document.getElementById("out").textContent =
    "state=" + JSON.stringify(history.state) + "\nhref=" + location.href;
};
