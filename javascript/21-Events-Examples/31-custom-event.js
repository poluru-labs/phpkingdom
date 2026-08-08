document.addEventListener("order:created", (e) => {
  document.getElementById("out").textContent =
    "heard detail=" + JSON.stringify(e.detail);
});
document.getElementById("btn").onclick = () => {
  document.dispatchEvent(new CustomEvent("order:created", {
    detail: { id: 42, total: 19.99 },
  }));
};
