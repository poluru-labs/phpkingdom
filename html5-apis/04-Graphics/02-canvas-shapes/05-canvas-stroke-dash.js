const ctx = document.getElementById("c").getContext("2d");
ctx.setLineDash([8, 6]);
ctx.lineWidth = 3;
ctx.strokeStyle = "#0f766e";
ctx.strokeRect(30, 25, 180, 50);
