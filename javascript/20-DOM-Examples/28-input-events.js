const input = document.getElementById("name");
const out = document.getElementById("out");
input.addEventListener("input", () => {
  out.textContent = "input → " + input.value;
});
input.addEventListener("change", () => {
  out.textContent += "\nchange → " + input.value;
});
