const s = "JaVa";
let out = "";
for (const ch of s) {
  if (ch >= "a" && ch <= "z") out += ch.toUpperCase();
  else if (ch >= "A" && ch <= "Z") out += ch.toLowerCase();
  else out += ch;
}
document.getElementById("out").textContent = s + " → " + out;
