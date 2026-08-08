let n = 0;
const out = document.getElementById("out");
document.getElementById("inc").onclick = () => { n++; out.textContent = String(n); };
document.getElementById("reset").onclick = () => { n = 0; out.textContent = "0"; };
