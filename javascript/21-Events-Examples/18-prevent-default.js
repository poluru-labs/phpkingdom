const out = document.getElementById("out");
document.getElementById("link").addEventListener("click", (e) => {
  e.preventDefault();
  out.textContent = "link navigation blocked";
});
document.getElementById("cb").addEventListener("click", (e) => {
  e.preventDefault();
  out.textContent = "checkbox toggle blocked";
});
