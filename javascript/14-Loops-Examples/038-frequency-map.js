const s = "banana";
const freq = {};
for (const ch of s) freq[ch] = (freq[ch] || 0) + 1;
document.getElementById("out").textContent = JSON.stringify(freq, null, 2);
