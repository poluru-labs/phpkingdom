const out = document.getElementById("out");
document.getElementById("name").addEventListener("change", (e) => {
  out.textContent = "input change → " + e.target.value;
});
document.getElementById("color").addEventListener("change", (e) => {
  out.textContent = "select change → " + e.target.value;
});
