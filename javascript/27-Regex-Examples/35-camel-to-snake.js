const names = ["getUserName", "XMLHttpRequest", "isOK"];
const toSnake = s => s.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
const results = names.map(n => n + " => " + toSnake(n));
document.getElementById("out").textContent = results.join("\n");
