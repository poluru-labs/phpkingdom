const ctx = document.getElementById("c").getContext("2d");
ctx.beginPath();
ctx.arc(120, 70, 40, 0, Math.PI * 2);
ctx.fillStyle = "#0f766e";
ctx.fill();
