document.getElementById("save").onclick = function () {
  localStorage.setItem("site", "phpkingdom.com");
  document.getElementById("out").textContent = "saved";
};
document.getElementById("load").onclick = function () {
  document.getElementById("out").textContent = localStorage.getItem("site");
};
