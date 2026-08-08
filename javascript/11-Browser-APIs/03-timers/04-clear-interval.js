let n = 0;
const id = setInterval(() => {
  n++;
  document.getElementById("out").textContent = "tick " + n;
  if (n >= 3) clearInterval(id);
}, 40);
