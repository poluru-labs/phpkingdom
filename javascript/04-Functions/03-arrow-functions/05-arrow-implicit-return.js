const toPair = (k, v) => ({ [k]: v });
document.getElementById("out").textContent = JSON.stringify(toPair("id", 7));
