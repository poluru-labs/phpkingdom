const s = "promise";
const vowels = new Set("aeiou");
let c = 0;
for (const ch of s) if (vowels.has(ch)) c++;
document.getElementById("out").textContent = String(c);
