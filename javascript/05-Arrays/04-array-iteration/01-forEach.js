const parts = [];
["a", "b", "c"].forEach((v, i) => parts.push(i + ":" + v));
document.getElementById("out").textContent = parts.join(" ");
