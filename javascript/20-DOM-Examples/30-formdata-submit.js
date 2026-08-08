document.getElementById("f").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const obj = Object.fromEntries(data.entries());
  document.getElementById("out").textContent = JSON.stringify(obj, null, 2);
});
