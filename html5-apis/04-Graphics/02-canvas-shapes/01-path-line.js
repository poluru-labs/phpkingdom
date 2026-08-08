const ctx = document.getElementById("c").getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 100);
ctx.lineTo(140, 20);
ctx.lineTo(260, 100);
ctx.strokeStyle = "#0f766e";
ctx.lineWidth = 3;
ctx.stroke();
