const s = "Education";
const vowels = "aeiouAEIOU";
let count = 0;
for (const ch of s) if (vowels.includes(ch)) count++;
document.getElementById("out").textContent = "vowels in \"" + s + "\" = " + count;
