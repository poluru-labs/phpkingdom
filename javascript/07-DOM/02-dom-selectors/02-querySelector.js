const first = document.querySelector(".item");
const all = document.querySelectorAll(".item");
document.getElementById("out").textContent =
  first.textContent + " / count=" + all.length;
