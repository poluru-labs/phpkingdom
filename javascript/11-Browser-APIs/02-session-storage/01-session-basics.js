document.getElementById("btn").onclick = function () {
  sessionStorage.setItem("visit", String(Date.now()));
  document.getElementById("out").textContent = sessionStorage.getItem("visit");
};
