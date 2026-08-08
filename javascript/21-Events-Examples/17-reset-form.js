document.getElementById("f").addEventListener("reset", () => {
  // runs before values clear; defer read
  setTimeout(() => {
    document.getElementById("out").textContent =
      "reset → n=" + document.querySelector('[name="n"]').value;
  });
});
