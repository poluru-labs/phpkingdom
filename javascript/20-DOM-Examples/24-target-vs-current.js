document.getElementById("wrap").addEventListener("click", (e) => {
  document.getElementById("out").textContent =
    "target=" + e.target.id +
    "\ncurrentTarget=" + e.currentTarget.id;
});
