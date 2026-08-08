const s = "javascript";
let rev = "";
for (let i = s.length - 1; i >= 0; i--) rev += s[i];
document.getElementById("out").textContent = s + " → " + rev;
