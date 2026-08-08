const ctx = document.getElementById("c").getContext("2d");
document.getElementById("out").textContent = "context: " + (ctx ? "2d ready" : "missing");
