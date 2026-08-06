const lines = [];
[10, 20].forEach((n, i) => lines.push(i + ":" + n));
document.getElementById("out").textContent = lines.join(" ");
