try {
  JSON.parse("{bad");
} catch (err) {
  document.getElementById("out").textContent = err.name;
}
