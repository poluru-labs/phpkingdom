const out = document.getElementById("out");
const log = (label) => () => { out.textContent += label + "\n"; };
document.getElementById("outer").addEventListener("click", () => { out.textContent = ""; }, true);
document.getElementById("outer").addEventListener("click", log("outer capture"), true);
document.getElementById("inner").addEventListener("click", log("inner capture"), true);
document.getElementById("btn").addEventListener("click", log("btn target"));
document.getElementById("inner").addEventListener("click", log("inner bubble"));
document.getElementById("outer").addEventListener("click", log("outer bubble"));
