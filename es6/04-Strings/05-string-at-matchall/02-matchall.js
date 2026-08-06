const s = "a1 b2 c3";
const matches = [...s.matchAll(/(\w)(\d)/g)].map(m => m[0] + "->" + m[1]);
document.getElementById("out").textContent = matches.join(", ");
