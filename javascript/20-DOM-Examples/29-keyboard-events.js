document.getElementById("field").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("out").textContent = "Enter: " + e.target.value;
  } else if (e.key === "Escape") {
    e.target.value = "";
    document.getElementById("out").textContent = "cleared";
  }
});
