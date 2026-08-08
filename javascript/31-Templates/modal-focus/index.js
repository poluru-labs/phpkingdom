const modal = document.getElementById("modal");
document.getElementById("open").onclick = () => {
  modal.hidden = false;
  document.getElementById("close").focus();
  document.getElementById("out").textContent = "opened";
};
document.getElementById("close").onclick = () => {
  modal.hidden = true;
  document.getElementById("open").focus();
  document.getElementById("out").textContent = "closed";
};
