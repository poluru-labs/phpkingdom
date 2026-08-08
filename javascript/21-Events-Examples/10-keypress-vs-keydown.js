document.getElementById("field").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("out").textContent = "submitted: " + e.target.value;
  }
});
