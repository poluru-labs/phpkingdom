const s = "java script";
document.getElementById("out").textContent = s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
