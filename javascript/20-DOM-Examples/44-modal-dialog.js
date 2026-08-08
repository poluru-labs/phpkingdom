const modal = document.getElementById("modal");
document.getElementById("open").onclick = () => { modal.hidden = false; };
document.getElementById("close").onclick = () => { modal.hidden = true; };
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.hidden = true;
});
