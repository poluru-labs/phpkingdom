function titleCase(s) {
  return s.toLowerCase().split(" ").map((w) => w ? w[0].toUpperCase() + w.slice(1) : w).join(" ");
}
document.getElementById("out").textContent = titleCase("learn javascript daily");
