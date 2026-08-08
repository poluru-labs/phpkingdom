const out = document.getElementById("out");
const e = new TypeError("expected number");
out.textContent = "name: " + e.name + "\nmessage: " + e.message;
