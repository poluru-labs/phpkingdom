document.querySelector(".demo").onclick = (e) => {
  const btn = e.target.closest("button[data-tab]");
  if (!btn) return;
  const tab = btn.dataset.tab;
  document.getElementById("tab-a").hidden = tab !== "a";
  document.getElementById("tab-b").hidden = tab !== "b";
  document.getElementById("out").textContent = "tab=" + tab;
};
