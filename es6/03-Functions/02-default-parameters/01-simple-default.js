const hi = (name = "guest") => `Hi ${name}`;
document.getElementById("out").textContent = hi();
