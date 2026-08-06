const id = () => Math.floor(Math.random() * 1000);
const make = (n = id()) => n;
document.getElementById("out").textContent = "id=" + make();
