document.getElementById("f").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  document.getElementById("out").textContent = "q=" + data.get("q");
});
