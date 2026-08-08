const p = document.getElementById("p");
document.getElementById("btn").onclick = () => {
  p.classList.toggle("on");
  document.getElementById("out").textContent =
    "has .on? " + p.classList.contains("on") + " | classes: " + p.className;
};
