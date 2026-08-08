sessionStorage.setItem("demo", "phpkingdom.com");
const v = sessionStorage.getItem("demo");
sessionStorage.removeItem("demo");
document.getElementById("out").textContent = "read then removed: " + v;
