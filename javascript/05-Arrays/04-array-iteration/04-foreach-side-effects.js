const log = [];
[10,20].forEach((n, i) => log.push(i + "=" + n));
document.getElementById("out").textContent = log.join("\n");
