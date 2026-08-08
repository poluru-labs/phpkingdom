const key = "views";
const n = Number(sessionStorage.getItem(key) || 0) + 1;
sessionStorage.setItem(key, String(n));
document.getElementById("out").textContent = "This tab views: " + n;
