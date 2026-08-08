document.getElementById("btn").onclick = function () {
  const box = document.getElementById("box");
  box.classList.toggle("highlight");
  document.getElementById("out").textContent = box.className;
};
