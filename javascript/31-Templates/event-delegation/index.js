document.getElementById("menu").onclick = (e) => {
  const li = e.target.closest("li[data-id]");
  if (!li) return;
  document.getElementById("out").textContent = "selected=" + li.dataset.id + " " + li.textContent;
};
