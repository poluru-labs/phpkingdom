const sel = document.getElementById("lang");
function show() {
  document.getElementById("out").textContent =
    "value=" + sel.value + " text=" + sel.selectedOptions[0].textContent;
}
sel.addEventListener("change", show);
document.getElementById("set").onclick = () => {
  sel.value = "css";
  show();
};
show();
