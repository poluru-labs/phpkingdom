const out = document.getElementById("out");
let n = 0;
document.getElementById("outer").addEventListener("mouseover", (e) => {
  n += 1;
  out.textContent = "mouseover #" + n + " target=" + e.target.id;
});
document.getElementById("outer").addEventListener("mouseout", (e) => {
  out.textContent += " | mouseout target=" + e.target.id;
});
