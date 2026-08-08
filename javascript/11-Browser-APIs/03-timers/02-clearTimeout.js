let id;
document.getElementById("start").onclick = function () {
  document.getElementById("out").textContent = "timer running…";
  id = setTimeout(function () {
    document.getElementById("out").textContent = "done";
  }, 2000);
};
document.getElementById("cancel").onclick = function () {
  clearTimeout(id);
  document.getElementById("out").textContent = "cancelled";
};
