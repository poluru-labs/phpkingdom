const box = document.getElementById("box");
box.addEventListener("transitionend", (e) => {
  document.getElementById("out").textContent =
    "transitionend property=" + e.propertyName;
});
document.getElementById("btn").onclick = () => box.classList.toggle("move");
